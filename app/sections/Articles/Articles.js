import { useState, useEffect } from "react";

import Image from "next/image";

import Button from "./../../atoms/Button/Button";
import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Grid from "./../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";
import BlogsCard from "./../../components/shared/BlogsCard/BlogsCard";
import FirstBlogsCard from "./../../components/shared/FirstBlogsCard/FirstBlogsCard";

import articleArrows from "./../../assets/imgs/sections/Articles/articleArrows.svg";
import articleArrowsLg from "./../../assets/imgs/sections/Articles/articleArrowsLg.svg";
//import right from "./../../assets/imgs/sections/Articles/right.svg";
//import left from "./../../assets/imgs/sections/Articles/left.svg";

import heartBg from "./../../assets/imgs/shared/heartBg.svg";

import { data as dataEn } from "./../../data/sections/Articles/data";
import { data as dataAr } from "./../../dataAr/sections/Articles/data";

//import staticBlogsList from "./../../data/shared/blogs/blogsExample.json";

import defaultImg from "./../../assets/imgs/pages/blogs/blog/defaultImg.jpg";

import styles from "./Articles.module.css";
import { base_URL } from "../../../enviroments/enviroments";
import { useLanguage } from "../../contexts/LanguageContext";
// const base_URL = "https://api.ameen.care/api/";

const Articles = () => {
  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);
  const [BlogsList, setBlogsList] = useState([]);

  useEffect(() => {
    fetch(`${base_URL}Blogs/GetBlogs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.blogList);

        setBlogsList(data.data.blogList);
      })
      .catch((err) => console.error(err));
  }, []);

  const blogsCardsList = [];
  if (BlogsList?.length > 0)
    for (let i = 1; i < 4; i++) {
      blogsCardsList.push(
        <BlogsCard
          key={BlogsList[i]?.id}
          img={BlogsList[i]?.thumpImagePath}
          title={BlogsList[i]?.titleAr}
          urlKey={BlogsList[i]?.urlKey}
          description={BlogsList[i]?.descriptionBriefAr}
          CoverImageName={BlogsList[i]?.thumpImageAltDescription}
          views={BlogsList[i]?.views}
          minutesToRead={BlogsList[i]?.minutesToRead}
          tags={BlogsList[i]?.tags}
        />
      );
    }

  return (
    <>
      {blogsCardsList.length && (
        <div id='blogs' className={styles.articles}>
          <div className={styles.heartBg}>
            <Image src={heartBg} alt='heartBg' />
          </div>

          <Container>
            <Grid atStart>
              <SectionTitle
                title={data.title}
                subtitle={data.subtitle}
                atStart
              />

              <FirstBlogsCard
                key={BlogsList[0]?.id}
                img={BlogsList[0]?.thumpImagePath}
                title={BlogsList[0]?.titleAr}
                urlKey={BlogsList[0]?.urlKey}
                description={BlogsList[0]?.descriptionBriefAr}
                CoverImageName={BlogsList[0]?.thumpImageAltDescription}
                views={BlogsList[0]?.views}
                minutesToRead={BlogsList[0]?.minutesToRead}
                tags={BlogsList[0]?.tags}
              />

              <Grid columns>{blogsCardsList}</Grid>

              <Button href={data.button.href}>{data.button.title}</Button>
            </Grid>
          </Container>

          <div>
            <div className={styles.articleArrows1}>
              <Image src={articleArrows} alt='articleArrows' />
            </div>

            <div className={styles.articleArrows2}>
              <Image src={articleArrowsLg} alt='articleArrows' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Articles;
