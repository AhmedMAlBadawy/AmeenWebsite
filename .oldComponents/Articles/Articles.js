import { useState, useEffect } from "react";

import Image from "next/image";

import Button from "./../../atoms/Button/Button";
import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Grid from "./../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";
import BlogsCard from "./../../components/shared/BlogsCard/BlogsCard";

import articleArrows from "./../../assets/imgs/sections/Articles/articleArrows.svg";
import articleArrowsLg from "./../../assets/imgs/sections/Articles/articleArrowsLg.svg";
import right from "./../../assets/imgs/sections/Articles/right.svg";
import left from "./../../assets/imgs/sections/Articles/left.svg";

import heartBg from "./../../assets/imgs/shared/heartBg.svg";

import { data as dataEn } from "./../../data/sections/Articles/data";
import { data as dataAr } from "./../../dataAr/sections/Articles/data";

//import staticBlogsList from "./../../data/shared/blogs/blogsExample.json";

import defaultImg from "./../../assets/imgs/pages/blogs/blog/defaultImg.jpg";

import styles from "./Articles.module.css";
import { useLanguage } from "../../app/contexts/LanguageContext";

const base_URL = "https://api.ameen.care/api/";

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
  const [PageNumber, setPageNumber] = useState(1);
  const [BlogsPerPage, setBlogsPerPage] = useState(10);

  useEffect(() => {
    fetch(`${base_URL}Blog/Search`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skip: PageNumber, // page number
        take: BlogsPerPage, // number of blogs in page
        tags: [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.blogs.length !== 0) setBlogsList(data.data.blogs);
      })
      .catch((err) => console.error(err));
  }, [PageNumber, BlogsPerPage]);

  let noOfArticles, shownArticles, allArticles;

  allArticles = BlogsList;

  const [Start, setStart] = useState(0);
  const [WinWidth, setWinWidth] = useState(0);

  noOfArticles = 1;

  if (WinWidth >= 800) {
    noOfArticles = 2;
  }

  if (WinWidth >= 900) {
    //noOfArticles = 3;
  }

  if (WinWidth >= 1200) {
    noOfArticles = 3;
  }

  if (WinWidth >= 1500) {
    noOfArticles = 4;
  }

  if (WinWidth >= 1700) {
    noOfArticles = 5;
  }

  shownArticles = allArticles.slice(Start, Start + noOfArticles);

  useEffect(() => {
    setWinWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
    });
  }, []);

  const handleNext = () => {
    setStart((Start) => Start + 1);
  };

  const handlePrev = () => {
    setStart((Start) => Start - 1);
  };

  const cardsList = shownArticles.map((article) => (
    <BlogsCard
      key={article.id}
      img={article.img}
      title={article.titleAr}
      description={article.briefAr}
      CoverImageName={article.CoverImageName}
      views={article.views}
      minutesToRead={article.minutesToRead}
    />
  ));

  return (
    <div id='blogs' className={styles.articles}>
      <div className={styles.heartBg}>
        <Image src={heartBg} alt='heartBg' />
      </div>

      <Container>
        <Grid atStart>
          <SectionTitle title={data.title} subtitle={data.subtitle} atStart />

          <div className={styles.articlesContainer}>
            <button
              className={styles.Button}
              onClick={handleNext}
              disabled={Start + noOfArticles >= allArticles.length}
            >
              <Image src={right} alt='right' />
            </button>

            <div className={styles.articleCards}>{cardsList}</div>

            <button
              className={styles.Button}
              onClick={handlePrev}
              disabled={Start === 0}
            >
              <Image src={left} alt='left' />
            </button>
          </div>

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
  );
};

export default Articles;
