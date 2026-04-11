import { useEffect, useState } from "react";
import Image from "next/image";

import { data as dataEn } from "../../data/sections/DownloadApps/data";
import { data as dataAr } from "../../dataAr/sections/DownloadApps/data";
import angles from "./../../assets/imgs/sections/Testimonial/angles.svg";

import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

import styles from "./DownloadApps.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const DownloadApps = () => {
  const { language } = useLanguage();

  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsList = data.apps.map((app) => (
    <div className={styles.Card} key={app.id}>
      <div className={styles.CardImg}>
        <div className={styles.CardIcon}>
          <Image width={30} height={30} src={app.appIcon} alt={app.appName} />
        </div>
        <Image width={150} height={150} src={app.qrCode} alt={app.appName} />
      </div>
      <div>
        <h3 className={styles.name}>{app.appName}</h3>
        <p className={styles.title}>{app.appDesc}</p>
      </div>
    </div>
  ));

  const cardsListSmall = data.apps.map((app) => (
    <a href={app.appLink} className={styles.Stores} key={app.id}>
      <Image width={320} height={100} src={app.appStore} alt={app.appName} />
    </a>
  ));

  return (
    <div id='testimonials' className={styles.apps}>
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <div className={styles.cards}>
        {windowSize.width > 980 ? cardsList : cardsListSmall}
      </div>
      <div className={styles.angles}>
        <Image src={angles} alt='background' />
      </div>
    </div>
  );
};

export default DownloadApps;
