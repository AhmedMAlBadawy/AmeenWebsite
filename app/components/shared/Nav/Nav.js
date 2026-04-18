import Image from "next/image";
import Link from "next/link";

import Container from "./../Container/Container";

import logo from "./../../../assets/imgs/components/Nav/logo.svg";
import close from "./../../../assets/imgs/components/Nav/close.svg";
import toggle from "./../../../assets/imgs/components/Nav/toggle.svg";
import user from "./../../../assets/imgs/components/Nav/user.svg";
import en from "./../../../assets/imgs/components/Nav/en.svg";
import ar from "./../../../assets/imgs/components/Nav/ar.svg";

import EnDatalinks from "./../../../data/shared/links.json";
import ArDatalinks from "./../../../dataAr/shared/links.json";

import styles from "./Nav.module.css";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useEffect, useState } from "react";

export const Nav = ({ ShowNav, toggleNavHandler }) => {
  const { language, changeLanguage } = useLanguage();
  const [links, setLinks] = useState(ArDatalinks);

  useEffect(() => {
    if (language === "ar") {
      setLinks(ArDatalinks);
    } else {
      setLinks(EnDatalinks);
    }
  }, [language, setLinks]);

  const handleChangeLanguage = () => {
    language === "ar" ? changeLanguage("en") : changeLanguage("ar");
  };
  return (
    <>
      <nav className={styles.Nav}>
        <Container>
          <div className={styles.deleteThisClass}>
            <Image
              src={logo}
              alt='logo'
              className={styles.logo}
              sizes='(max-width: 799px) 150px, 180px'
              priority
            ></Image>

            <button
              type='button'
              onClick={toggleNavHandler}
              className={styles.toggleIcon}
              aria-label='Toggle menu'
            >
              {ShowNav ? (
                <Image src={close} alt='close' />
              ) : (
                <Image src={toggle} alt='toggle' />
              )}
            </button>


            <ul className={styles.toolbarMenuLg}>
              <li>
                <Link href={links.home.link}>{links.home.title}</Link>
              </li>

              <li>
                <Link href={links.procedures.link}>
                  {links.procedures.title}
                </Link>
              </li>

              <li>
                <Link href={links.ourServices.link}>
                  {links.ourServices.title}
                </Link>
              </li>

              <li>
                <Link href={links.packages.link}>{links.packages.title}</Link>
              </li>

              <li>
                <Link href={links.blogs.link}>{links.blogs.title}</Link>
              </li>

              {/*<li>
              <Link href={links.aboutUs.link}>{links.aboutUs.title}</Link>
            </li>*/}

              <li>
                <Link href={links.contactUs.link}>{links.contactUs.title}</Link>
              </li>

              <li>
                <Link href={links.tel.link}>{links.tel.title}</Link>
              </li>

              <li className={styles.button}>
                <Link href={links.adviseReq.link}>{links.adviseReq.title}</Link>
              </li>

              {/*<li>
                <button>
                  <Image src={ar} alt="language"
                  styles={{cursor: "pointer"}}
                  onClick={() => handleChangeLanguage()}>
                  </Image>
                </button>
              </li>*/}
              
              <li>
              <button onClick={handleChangeLanguage} style={{ cursor: "pointer" }}>
                <Image src={language === "ar" ? en : ar} alt="language" />
              </button>
            </li>

              <li style={{marginLeft:"2rem"}}>
                <a href={links.signIn.link} className={styles.iconGroup}>
                  <Image src={user} alt='user' />
                  <p>{links.signIn.title}</p>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Nav;
