import Image from "next/image";
import Link from "next/link";

import Container from "./../Container/Container";

import heart from "./../../../assets/imgs/components/SideNav/heart.svg";
import person from "./../../../assets/imgs/components/SideNav/person.svg";

import facebook from "./../../../assets/imgs/components/SideNav/facebook.svg";
import Twitter from "./../../../assets/imgs/components/SideNav/Twitter.svg";
import Snapchat from "./../../../assets/imgs/components/SideNav/Snapchat.svg";
import Instagram from "./../../../assets/imgs/components/SideNav/Instagram.svg";
import Youtube from "./../../../assets/imgs/components/SideNav/Youtube.svg";
import world from "./../../../assets/imgs/components/SideNav/world.svg";

import EnDatalinks from "./../../../data/shared/links.json";
import ArDatalinks from "./../../../dataAr/shared/links.json";

import styles from "./SideNav.module.css";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useEffect, useState } from "react";

const SideNav = ({ toggleNavHandler }) => {
  const { language, changeLanguage } = useLanguage("ar");
  const [links, setLinks] = useState(ArDatalinks);

  useEffect(() => {
    if (language === "ar") {
      setLinks(ArDatalinks);
    } else {
      setLinks(EnDatalinks);
    }
  }, [language, setLinks]);
  
  const handleChangeLanguage = () => {
    changeLanguage(language === "ar" ? "en" : "ar");
  };
  return (
    <div className={styles.SideNav}>
      <Container>
        <div className={styles.background}>
          <Image src={heart} alt='heart' />
        </div>

        <ul className={styles.list}>
          <li
            className={`${styles.listItem} ${styles.active}`}
            onClick={toggleNavHandler}
          >
            <Link href={links.home.link}>{links.home.title}</Link>
          </li>

          <li className={styles.listItem} onClick={toggleNavHandler}>
            <Link href={links.procedures.link}>{links.procedures.title}</Link>
          </li>

          <li className={styles.listItem} onClick={toggleNavHandler}>
            <Link href={links.ourServices.link}>{links.ourServices.title}</Link>
          </li>

          <li className={styles.listItem} onClick={toggleNavHandler}>
            <Link href={links.packages.link}>{links.packages.title}</Link>
          </li>

          {/*<li className={styles.listItem} onClick={toggleNavHandler}>
            <Link href={links.aboutUs.link}>{links.aboutUs.title}</Link>
          </li>*/}

          <li className={styles.listItem} onClick={toggleNavHandler}>
            <Link href={links.contactUs.link}>{links.contactUs.title}</Link>
          </li>

          <li className={styles.listItem} onClick={toggleNavHandler}>
            <Link href={links.tel.link}>{links.tel.title}</Link>
          </li>

          <li
            className={`${styles.listItem} ${styles.button}`}
            onClick={toggleNavHandler}
          >
            <Link href={links.adviseReq.link}>{links.adviseReq.title}</Link>
          </li>

          <li
            className={`${styles.listItem} ${styles.signIn}`}
            onClick={toggleNavHandler}>
            <div className={styles.person}>
              <Image src={person} alt='person' />
            </div>
            <Link href={links.signIn.link}>{links.signIn.title}</Link>
            <div className={`${styles.language} ${language === 'ar' ? styles.ar : styles.en}`}>
        <button onClick={handleChangeLanguage}>
          <Image src={world} alt="World icon" />
          <p>{language === 'ar' ? 'EN' : 'AR'}</p>
        </button>
      </div>
          </li>
          {/*<li className={`${styles.language}`}>
              <button onClick={handleChangeLanguage} style={{ cursor: "pointer"  }}>
                <Image src={world} alt="world" />
                <p>
                  {language === "ar" ? "en" : "ar"}
                </p>
              </button>
            </li>*/}
        </ul>

        <div className={styles.socials}>
          <div className={styles.social}>
            <a href='https://m.facebook.com/pages/category/Medical---Health/PhysioHomeco-110703637151149/'>
              <Image src={facebook} alt='facebook' />
            </a>
          </div>

          <div className={styles.social}>
            <a href='https://twitter.com/ameencare'>
              <Image src={Twitter} alt='Twitter' />
            </a>
          </div>

          <div className={styles.social}>
            <a href='#'></a>
            <Image src={Snapchat} alt='Snapchat' />
          </div>

          <div className={styles.social}>
            <a href='https://www.instagram.com/ameencare/'>
              <Image src={Instagram} alt='Instagram' />
            </a>
          </div>

          <div className={styles.social}>
            <a href='https://www.youtube.com/channel/UCIujq5dwPXGSARu_qH1wp7g'>
              <Image src={Youtube} alt='Youtube' />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SideNav;
