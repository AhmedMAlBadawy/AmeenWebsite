import Image from "next/image";

import Container from "../../app/components/shared/Container/Container";
import Layout from "../../app/components/shared/Layout/Layout";

import { content as contentEn } from "../../app/data/pages/about-us/data";
import { content as contentAr } from "../../app/dataAr/pages/about-us/data";

import styles from "./index.module.css";

import angles from "../../app/data/pages/about-us/angles.svg";
import mainAboutImg from "./../../app/assets/imgs/pages/about-us/main-about-img.jpg";
import SectionTitle from "../../app/atoms/SectionTitle/SectionTitle";
import Features from "../../app/sections/Features/Features";
import Head from "next/head";
import { useLanguage } from "../../app/contexts/LanguageContext";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const { language, changeLanguage } = useLanguage();

  const [content, setContent] = useState(contentAr);
  useEffect(() => {
    if (language === "ar") {
      setContent(contentAr);
    } else {
      setContent(contentEn);
    }
  }, [language, setContent]);

  const SectionsList = content.Sections.map((section, index) => {
    return (
      <section className={styles.setionContainer} key={index}>
        <Head>
          <title>عن أمين</title>

          <meta name='keywords' content='' />
          <meta
            name='description'
            content='أمين هي عيادة إلكترونية منزلية متخصصة تقدم خدمة جلسات العلاج الطبيعي والتأهيل، وتسعى لتوفير الخيارات الصحية والطبية الأخرى للمساهمة في رفع مستوى الصحة الجسدية وخلق نظام صحي ودعم استقلالية الأشخاص في حياتهم وعائلاتهم.'
          />
          <meta name='title' content='about, عن أمين' />
        </Head>
        <Container>
          {section.Title ? (
            <h4 key={index} className={styles.subTitle}>
              {section.Title}
            </h4>
          ) : null}

          {section.Type == "Paragraph" ? (
            <>
              {section.Paragraphs.map((p, idx) => (
                <p key={idx} className={styles.span}>
                  {p}
                </p>
              ))}
              <div className={styles.sectionImages}>
                {section.Images.map((p, idx) => (
                  <div key={idx} className={styles.sectionImg}>
                    <Image src={p} alt={idx} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <ul>
              {section.Paragraphs.map((p, idx) => (
                <li key={idx} className={styles.listItem}>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    );
  });

  const FoundersList = content.founders.map((o) => (
    <div key={o.title} className={styles.founderCard}>
      <div className={styles.founderImg}>
        <Image src={o.oImg} alt='oImg' layout='fill' objectFit='cover' />
      </div>
      <h3 className={styles.founderTitle}>{o.title}</h3>
      {o.position}
    </div>
  ));

  return (
    <Layout padding='130px 0 100px'>
      {/* <Head>
        <title>First Post</title>
      </Head> */}
      <Container>
        <h2 className={styles.title}>{content.Title}</h2>
        <p className={styles.shortDesc}>{content.SubTitle}</p>
        {/* <img src={mainAboutImg} width='500' height='500' /> */}
        <div className={styles.mainImg}>
          <Image
            src={mainAboutImg}
            alt='mainAboutImg'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </Container>
      {SectionsList}
      <div className={styles.foundersSection}>
        <Container>
          <SectionTitle
            title={language === "ar" ? "مؤسسين أمين " : "Founders of Ameen"}
          />
          <div className={styles.founderList}>{FoundersList}</div>
        </Container>
        <div className={styles.angles}>
          <Image src={angles} alt='background' />
        </div>
      </div>
      <Features position='bottom' />
    </Layout>
  );
};

export default AboutUs;
