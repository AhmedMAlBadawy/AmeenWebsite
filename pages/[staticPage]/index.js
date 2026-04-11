import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../../app/components/shared/Layout/Layout";
import Container from "../../app/components/shared/Container/Container";

import ArStaticPages from "../../app/dataAr/pages/staticPages/data.json";
import EnStaticPages from "../../app/data/pages/staticPages/data.json";

import styles from "./index.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useLanguage } from "../../app/contexts/LanguageContext";

const StaticPage = () => {
  const router = useRouter();
  const { language, changeLanguage } = useLanguage();
  const [staticPages, setStaticPages] = useState(ArStaticPages);

  useEffect(() => {
    if (language === "ar") {
      setStaticPages(ArStaticPages);
    } else {
      setStaticPages(EnStaticPages);
    }
  }, [language, setStaticPages]);

  const pageContent = staticPages[router.query.staticPage];

  const SectionsList = pageContent?.sections.map((section, index) => {
    return (
      <section key={index}>
        {section.title && <h2>{section.title}</h2>}

        {section.type == "paragraph" ? (
          section.paragraphs.map((p, idx) => (
            <p key={idx} className={styles.paragraph}>
              {p}
            </p>
          ))
        ) : section.type == "list" ? (
          <ul>
            {section.paragraphs.map((p, idx) => (
              <li key={idx} className={styles.listItem}>
                {p}
              </li>
            ))}
          </ul>
        ) : section.type == "numList" ? (
          <ol>
            {section.paragraphs.map((p, idx) => (
              <li key={idx} className={styles.NumListItem}>
                {p}
              </li>
            ))}
          </ol>
        ) : section.type == "link" ? (
          <p className={`${styles.paragraph} ${styles.link}`}>
            {section.textBeforeLink}
            <Link href={section.href}>{section.linkTitle}</Link>
            {section.textAfterLink}
          </p>
        ) : null}
      </section>
    );
  });

  return (
    <Layout padding='130px 0 100px'>
      <Head>
        <title>{pageContent?.title}</title>
        <meta name='description' content={pageContent?.title} />
        <meta name='keywords' content={pageContent?.title} />
        <meta name='title' content={pageContent?.title} />
      </Head>
      <Container>
        <h1 className={styles.title}>{pageContent?.title}</h1>

        {SectionsList}
      </Container>
    </Layout>
  );
};

export default StaticPage;
