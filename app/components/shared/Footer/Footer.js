import Image from "next/image";
import Link from "next/link";

import Container from "./../Container/Container";

import footerHeart from "./../../../assets/imgs/components/Footer/footerHeart.svg";
import logo from "./../../../assets/imgs/components/Footer/logoLg.svg";
import facebook from "./../../../assets/imgs/components/Footer/facebook.svg";
import twitter from "./../../../assets/imgs/components/Footer/twitter.svg";
import instagram from "./../../../assets/imgs/components/Footer/instagram.svg";
import mada from "./../../../assets/imgs/components/Footer/mada.svg";
import mastercard from "./../../../assets/imgs/components/Footer/mastercard.svg";
import visa from "./../../../assets/imgs/components/Footer/visa.svg";

import EnDatalinks from "./../../../data/shared/links.json";
import ArDatalinks from "./../../../dataAr/shared/links.json";

import styles from "./Footer.module.css";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useEffect, useState } from "react";

const Footer = () => {
  const { language, changeLanguage } = useLanguage();

  const [links, setLinks] = useState(ArDatalinks);

  useEffect(() => {
    if (language === "ar") {
      setLinks(ArDatalinks);
    } else {
      setLinks(EnDatalinks);
    }
  }, [language, setLinks]);

  return (
    <footer id='footer' className={styles.footer}>
      <span className={styles.footerHeart}>
        <Image src={footerHeart} alt='footerHeart' />
      </span>
      <Container className={styles.Container}>
        <div className={styles.body}>
          <div>
            <span className={styles.logo}>
              <Image src={logo} alt='logo' />
            </span>
            <span>
              {language === "ar"
                ? `شركة متخصصة في تقديم الخدمات الطبية والصحية المنزلية لتساعد في تقليل الالام وتحسين الصحة الجسدية`
                : "A company specialized in providing home medical and health services to help reduce pain and improve physical health."}
            </span>
            <span className={styles.icons}>
              <a href='https://www.facebook.com/ameencare'>
                <Image draggable={false} src={facebook} alt='social icons' />
              </a>
              <a href='https://twitter.com/ameencare'>
                <Image draggable={false} src={twitter} alt='social icons' />
              </a>
              <a href='https://www.instagram.com/ameencare/'>
                <Image draggable={false} src={instagram} alt='social icons' />
              </a>
              {/* <a href="https://www.youtube.com/channel/UCIujq5dwPXGSARu_qH1wp7g">
                <Image draggable={false} src={Youtube} alt='social icons' />
                </a>
              <a href="#">
                <Image draggable={false} src={Snapchat} alt='social icons' />
                </a> */}
            </span>
          </div>
          <div>
            <p className={styles.custom_h}>اكتشف معنا</p>

            <div>
              <ul>
                <li>
                  <Link href={links.aboutUs.link}>{links.aboutUs.title}</Link>
                </li>

                <li>
                  <Link href={links.ourServices.link}>
                    {links.ourServices.title}
                  </Link>
                </li>

                <li>
                  <Link href={links.whyAmeen.link}>{links.whyAmeen.title}</Link>
                </li>
                <li>
                  <Link href={links.blogsPage}>
                    {language === "ar" ? "مقالات أمين" : "Ameen articles"}
                  </Link>
                </li>

                <li>
                  <Link href={links.successPartners.link}>
                    {links.successPartners.title}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className={styles.custom_h}>
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </p>

            <div>
              <ul>
                <li>
                  <a className={styles.link} href={links.booking.link}>
                    {links.booking.title}
                  </a>
                </li>
                <li>
                  <Link href={links.FAQs.link}>{links.FAQs.title}</Link>
                </li>
                <li>
                  <Link href={links.privacy.link}>{links.privacy.title}</Link>
                </li>
                <li>
                  <Link href={links.testimonials.link}>
                    {links.testimonials.title}
                  </Link>
                </li>
                <li>
                  <Link href={links.joinUs.link}>{links.joinUs.title}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className={styles.custom_h}>
              {language === "ar" ? "معلومات التواصل" : "Contact Information"}
            </p>
            <ul>
              <li className={styles.english}>
                <a href={links.tel.link}>{links.tel.title}</a>
              </li>
              <li className={styles.english}>
                <a href={links.email.link}>{links.email.title}</a>
              </li>
            </ul>

            <div className={styles.payments_parent}>
              <div className={styles.payemts_width}>
                <Image draggable={false} src={visa} alt="visa" />
              </div>
              <div className={styles.payemts_width}>
                <Image draggable={false} src={mastercard} alt="mastercard" />
              </div>
              <div className={styles.payemts_width}>
                <Image draggable={false} src={mada} alt="mada" />
              </div>
            </div>
          </div>
        </div>
        <span className={styles.whiteBorder}></span>
        <ul>
          <li>
            {language === "ar"
              ? "جميع الحقوق محفوظة لرعاية أمين @2024 "
              : "All rights reserved to Ameen Care @2024"}
          </li>
          <li>
            <Link href={links.privacy.link}>{links.privacy.title}</Link>
            <Link href={links.termsAndConditions.link}>
              {links.termsAndConditions.title}
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
