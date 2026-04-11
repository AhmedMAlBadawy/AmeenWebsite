import { useEffect, useState } from "react";

import Grid from "./../../app/components/shared/Grid/Grid";
import Layout from "./../../app/components/shared/Layout/Layout";
import Container from "./../../app/components/shared/Container/Container";
import BlogsCard from "./../../app/components/shared/BlogsCard/BlogsCard";
import FirstBlogsCard from "../../app/components/shared/FirstBlogsCard/FirstBlogsCard";

import { data as dataEn } from "./../../app/data/sections/Articles/data";
import { data as dataAr } from "./../../app/dataAr/sections/Articles/data";

//import staticBlogsList from "./../../app/data/shared/blogs/blogsExample.json";
import defaultImg from "./../../app/assets/imgs/pages/blogs/blog/defaultImg.jpg";

import thumbImage from "./../../app/assets/imgs/pages/blogs/blog/thumbImage.png";
import styles from "./index.module.css";
import BlogsFilter from "../../app/components/sections/BlogsFilter/BlogsFilter";
import { base_URL } from "../../enviroments/enviroments";
import Image from "next/image";
import DownloadApps from "../../app/sections/DownloadApps/DownloadApps";
import Head from "next/head";
import { useLanguage } from "../../app/contexts/LanguageContext";

const Page = () => {
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

  const [PageIndex, setPageIndex] = useState(0);
  const [PageSize, setPageSize] = useState(10);
  const [IsLoading, setIsLoading] = useState(false);
  const [TotalItems, setTotalItems] = useState(0);
  const [MasterCard, setMasterCard] = useState();

  const [Search, setSearch] = useState("");
  const [Tags, setTags] = useState([]);
  const [CheckedTags, setCheckedTags] = useState([]);

  useEffect(() => {
    fetch(`${base_URL}Blogs/GetBlogs`)
      .then((response) => response.json())
      .then((data) => {
        setMasterCard(data.data.blogList[0]);
      });
  }, []);

  const unique = (arr) => {
    let ids = [];
    let uniqueArr = [];
    arr.forEach((r) => {
      if (!ids.includes(r.id)) {
        ids.push(r.id);
        uniqueArr.push(r);
      }
    });
    return uniqueArr;
  };

  const getData = (index, size, filter = false) => {
    if (filter) setPageIndex(0);
    try {
      setIsLoading(true);
      let tagsQuery = "";
      CheckedTags.forEach((ct) => {
        tagsQuery += `&TagIds=${ct}`;
      });
      fetch(
        `${base_URL}Blogs/GetBlogs?Title=${Search}${tagsQuery}&PageSize=${size}&PageIndex=${index}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTotalItems(data.data.paginationInfoList.totalItems);
          setIsLoading(false);
          if (filter) return unique([...data.data.blogList]);

          return unique([...BlogsList, ...data.data.blogList]);
        })
        .then((data) => {
          setBlogsList(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getTags = () => {
    try {
      setIsLoading(true);
      fetch(`https://admin.ameener.com/tags/Gettags`)
        .then((response) => response.json())
        .then((data) => {
          setTags(
            data.tagList.map((tag) => {
              return { id: tag.id, name: tag.nameAr, check: false };
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    getData(PageIndex, PageSize);
    getTags();
  }, []);

  let handleLoadMore = () => {
    setPageIndex(PageIndex + 1);
    if (PageIndex) getData(PageIndex + 1, PageSize);
    else getData(1, PageSize);
  };

  const blogsCardsList = [];
  for (let i = 0; i < BlogsList.length; i++) {
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
    <Layout padding='130px 0 100px'>
      <Head>
        <title>مقالات أمين</title>

        <meta
          name='description'
          content='أحدث منشورات مدونتنا .. كن على اطلاع بكل ما تحتاج لمعرفته حول العلاج الطبيعي. أحدث منشورات مدونتنا .. كن على اطلاع بكل ما تحتاج لمعرفته حول العلاج الطبيعي.'
        />
        <meta name='keywords' content='blogs, مقالات' />
        <meta name='title' content='مقالات' />
      </Head>
      <div className={styles.thumbImage}>
        <Image
          layout='fill'
          objectFit='cover'
          src={thumbImage}
          alt={"thumbImage"}
        />
      </div>
      <Container>
        <Grid>
          <h1 className={styles.title}>{data.title}</h1>

          <h2 className={styles.subtitle}>{data.subtitle} </h2>
          <FirstBlogsCard
            CheckedTags={CheckedTags}
            key={MasterCard?.id}
            img={MasterCard?.thumpImagePath}
            title={MasterCard?.titleAr}
            description={MasterCard?.descriptionBriefAr}
            CoverImageName={MasterCard?.thumpImageAltDescription}
            views={MasterCard?.views}
            minutesToRead={MasterCard?.minutesToRead}
            urlKey={MasterCard?.urlKey}
          />

          <BlogsFilter
            Tags={Tags}
            setTags={setTags}
            Search={Search}
            setSearch={setSearch}
            CheckedTags={CheckedTags}
            setCheckedTags={setCheckedTags}
            getData={getData}
            PageIndex={PageIndex}
            PageSize={PageSize}
            setPageIndex={setPageIndex}
          />

          <Grid columns>{blogsCardsList}</Grid>
          {BlogsList.length < TotalItems && (
            <button className={styles.Button} onClick={handleLoadMore}>
              {data.button.title} {IsLoading && " ..."}
            </button>
          )}
        </Grid>
      </Container>
      <DownloadApps />
    </Layout>
  );
};

export default Page;
