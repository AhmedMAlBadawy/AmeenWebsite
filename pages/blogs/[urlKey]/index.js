import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

import Layout from "../../../app/components/shared/Layout/Layout";
import Container from "../../../app/components/shared/Container/Container";

//import staticBlog from "./../../../app/data/shared/blogs/blogExample.json";
import logo from "./../../../app/assets/imgs/shared/heartBg.svg";
import Features from "../../../app/sections/Features/Features";

import defaultImg from "./../../../app/assets/imgs/pages/blogs/blog/defaultImg.jpg";
import EyeIcon from "../../../app/assets/icons/shared/eye";
import ClockIcon from "../../../app/assets/icons/shared/clock";

import styles from "./index.module.css";
import { base_URL, site_URL } from "../../../enviroments/enviroments";

import Head from "next/head";

import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";

import facebook from "../../../app/assets/imgs/components/BlogDetails/facebook.svg";
import twitter from "../../../app/assets/imgs/components/BlogDetails/twitter.svg";
import DownloadApps from "../../../app/sections/DownloadApps/DownloadApps";
import { useLanguage } from "../../../app/contexts/LanguageContext";

const Article = ({ req }) => {
  const { language } = useLanguage();

  const [Content, setContent] = useState({});

  const router = useRouter();

  const urlKey = router.query.urlKey;

  const getLocationOrigin = () => {
    return `${site_URL}blogs/${router.query.urlKey}`;
  };

  useEffect(() => {
    let api = `${base_URL}Blogs/GetBlogByKey?urlKey=${urlKey}`;
    if (urlKey)
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          setContent(data.data);
        })
        .catch((err) => console.error(err));
  }, [urlKey]);

  const SectionsList = Content?.paragraphs?.map((section, i) => {
    return (
      <section
        key={section.title + section.titleAr}
        className={`${styles.section} ${i % 2 === 1 && styles.oddSection} `}
      >
        {i % 2 === 1 && (
          <div className={styles.sectionHeartBG}>
            <Image src={logo} alt='heartBg' />
          </div>
        )}

        <Container>
          {section.titleAr && <h2>{section.titleAr} </h2>}

          <div dangerouslySetInnerHTML={{ __html: section.contentAr }}></div>
        </Container>
      </section>
    );
  });

  return (
    <Layout padding='130px 0 100px'>
      <Head>
        <title>{Content?.metaTitle}</title>

        <meta name='keywords' content={Content?.keywords} />
        <meta name='description' content={Content?.metaDescription} />
        <meta name='title' content={Content?.metaTitle} />
      </Head>
      <Container>
        <h1 className={styles.title}>{Content?.titleAr}</h1>
      </Container>

      <Container>
        <div className={styles.readAndView}>
          <div className={styles.views}>
            <EyeIcon />

            <span>
              {language === "ar"
                ? (+Content?.views === 0 || +Content?.views > 10) &&
                  `${Content?.views} مشاهدة`
                : (+Content?.views === 0 || +Content?.views > 10) &&
                  `${Content?.views} views`}

              {language === "ar"
                ? +Content?.views === 1 && "مشاهدة واحدة"
                : +Content?.views === 1 && "1 view"}

              {language === "ar"
                ? +Content?.views === 2 && "مشاهدتان"
                : +Content?.views === 2 && "2 views"}

              {language === "ar"
                ? +Content?.views > 2 &&
                  +Content?.views < 11 &&
                  `${Content?.views} مشاهدات`
                : +Content?.views > 2 &&
                  +Content?.views < 11 &&
                  `${Content?.views} views`}

              {language === "ar"
                ? !+Content?.views && Content?.views !== 0 && "لا يوجد بيانات"
                : !+Content?.views && Content?.views !== 0 && "No data"}
            </span>
          </div>

          <div className={styles.minutesToRead}>
            <ClockIcon />

            <span>
              {language === "ar"
                ? (+Content?.minutesToRead === 0 ||
                    +Content?.minutesToRead > 10) &&
                  `${Content?.minutesToRead} دقيقة`
                : (+Content?.minutesToRead === 0 ||
                    +Content?.minutesToRead > 10) &&
                  `${Content?.minutesToRead} minutes`}

              {language === "ar"
                ? +Content?.minutesToRead === 1 && "دقيقة واحدة"
                : +Content?.minutesToRead === 1 && "1 minute"}

              {language === "ar"
                ? +Content?.minutesToRead === 2 && "دقيقتان"
                : +Content?.minutesToRead === 2 && "2 minutes"}

              {language === "ar"
                ? +Content?.minutesToRead > 2 &&
                  +Content?.minutesToRead < 11 &&
                  `${Content?.minutesToRead} دقائق`
                : +Content?.minutesToRead > 2 &&
                  +Content?.minutesToRead < 11 &&
                  `${Content?.minutesToRead} minutes`}

              {language === "ar"
                ? !Content?.minutesToRead &&
                  Content?.minutesToRead !== 0 &&
                  "لا يوجد بيانات"
                : !Content?.minutesToRead &&
                  Content?.minutesToRead !== 0 &&
                  "No data"}
            </span>
          </div>
        </div>
        <div className={styles.masterImg}>
          <div className={styles.mainImg}>
            {Content?.coverImagePath ? (
              <Image
                width={1232}
                height={600}
                objectFit='cover'
                // src={Content?.coverImageName} // until fixed
                src={Content?.coverImagePath}
                alt={Content?.coverImageAltDescription}
              />
            ) : null}
          </div>

          <ul className={styles.icons}>
            <li>
              <FacebookShareButton
                url={getLocationOrigin()}
                // hashtag={"#hashtag"}
                description={Content?.titleAr}
                className={styles.shareIcon}
              >
                <Image draggable={false} src={facebook} alt='social icons' />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={getLocationOrigin()}
                // hashtag={"#hashtag"}
                description={Content?.titleAr}
                className={styles.shareIcon}
              >
                <Image draggable={false} src={twitter} alt='social icons' />
              </TwitterShareButton>
            </li>
          </ul>
        </div>
        <div className={styles.tags}>
          {Content?.tags?.map((t) => (
            <span key={t.tagId}>{t.tagName}</span>
          ))}
        </div>
      </Container>
      <Container>
        <p
          dangerouslySetInnerHTML={{
            __html: Content?.descriptionAr,
          }}
        ></p>
      </Container>

      {SectionsList}
      <DownloadApps />
      <Features position='bottom' />
    </Layout>
  );
};

export default Article;
