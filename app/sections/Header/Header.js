import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

import Container from "./../../components/shared/Container/Container";

//import Slide from "./../../components/sections/Header/Slide/Slide";

import family from "./../../assets/imgs/sections/Header/family.png";
import familyLg from "./../../assets/imgs/sections/Header/familyLg.png";
import family01 from "./../../assets/imgs/sections/Header/family01.png";
import family01Lg from "./../../assets/imgs/sections/Header/familyLg01.png";
import family02 from "./../../assets/imgs/sections/Header/family02.png";
import family02Lg from "./../../assets/imgs/sections/Header/familyLg02.png";

import styles from "./../Header/Header.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = () => {
  const { language, changeLanguage } = useLanguage();

  const slidesList = [
    <SwiperSlide key={1}>
      <Container className={styles.Container}>
        <div className={styles.headerContent}>
          <div className={styles.welcome}>
            <h1 className={styles.title}>
              {language === "ar"
                ? "خدمات طبية وصحية منزلية"
                : "Home medical and health services"}
            </h1>

            <p className={styles.text}>
              {language === "ar"
                ? `على جلسات مخصصة لجميع احتياجاتك من منزلك. نقدم خدمات منزلية
                متعدةة لعديد من الحالات الصحيه.`
                : "Get personalized sessions for all your health needs in the comfort of your home, we offer home services for various health problems, injuries and post-operative rehabilitation."}
            </p>

            <a href='https://airtable.com/apppSpaCOnaAyYFZc/shrRlfwCWkVKxeaC2' className={styles.btn}>
              {language === "ar" ? "احجز جلسة" : "Book a Session"}
            </a>

            <div className={styles.dots}>
              <div className={styles.selectedDot}>
                <span className={styles.selectedContent}></span>
              </div>

              <span className={styles.dot}></span>

              <span className={styles.dot}></span>
            </div>
          </div>

          <div className={styles.images}>
            <div className={styles.display1}>
              <Image
                className={styles.display1}
                src={family}
                alt='family'
                sizes='(max-width: 799px) 92vw, 0px'
              ></Image>
            </div>

            <div className={styles.display2}>
              <Image
                className={styles.display2}
                src={familyLg}
                alt='family'
                sizes='(min-width: 800px) 50vw, 0px'
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </SwiperSlide>,
    <SwiperSlide key={2}>
      <Container className={styles.Container}>
        <div className={styles.headerContent}>
          <div className={styles.welcome}>
            <h2 className={styles.title}>
              {language === "ar"
                ? `  عائلتك في أيد أمينة`
                : "Your family is in trustworthy hands"}
            </h2>
            <p className={styles.text}>
              {language === "ar"
                ? `ممارسو الخدمات الطبية والصحية المرخصون لدينا هم خبراء في الرعاية المنزلية ومتمرسين في التعامل وعلاج ومنع المشاكل الصحية والإصابات والتأهيل ما  بعد العمليات المختلفة في عدد من التخصصات، مثل: العلاج الطبيعي، العلاج الوظيفي، السمع والنطق والتخاطب، التغذية العلاجية والتمريض.`
                : "Our licensed health and medical practitioners are home care experts who are experienced in treating, preventing and managing health problems, injuries and post-operative rehabilitation in a number of specialties, such as: Physical therapy, Occupational therapy, Speech and Language Pathology and Audiology, Clinical Nutrition and Nursing."}
            </p>
            <a href='https://airtable.com/apppSpaCOnaAyYFZc/shrRlfwCWkVKxeaC2' className={styles.btn}>
              {language === "ar" ? "احجز جلسة" : "Book a Session"}
            </a>
            <div className={styles.dots}>
              <span className={styles.dot}></span>
              <div className={styles.selectedDot}>
                <span className={styles.selectedContent}></span>
              </div>
              <span className={styles.dot}></span>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.display1}>
              <Image
                className={styles.display1}
                src={family01}
                alt='family'
                sizes='(max-width: 799px) 92vw, 0px'
              ></Image>
            </div>
            <div className={styles.display2}>
              <Image
                className={styles.display2}
                src={family01Lg}
                alt='family'
                sizes='(min-width: 800px) 50vw, 0px'
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </SwiperSlide>,
    <SwiperSlide key={3}>
      <Container className={styles.Container}>
        <div className={styles.headerContent}>
          <div className={styles.welcome}>
            <p className={styles.title}>
              {language === "ar"
                ? `احصل على مزايا خدماتنا بدون الحاجة للتنقل`
                : "Get our services benefits without having to move"}
            </p>
            <p className={styles.text}>
              {language === "ar"
                ? `سواء كنت تعاني من آلام، مشكلة صحية، إصابة، أو تحتاج للتأهيل بعد العملية، فإن أُمنائنا جاهزين لمساعدتك في منزلك`
                : "Whether you are suffering from pain, a health problem, an injury, or need post-operative rehabilitation, our Ameeners is ready to help you in the comfort of your home."}
            </p>
            <a href='https://airtable.com/apppSpaCOnaAyYFZc/shrRlfwCWkVKxeaC2' className={styles.btn}>
              {language === "ar" ? "احجز جلسة" : "Book a Session"}
            </a>
            <div className={styles.dots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <div className={styles.selectedDot}>
                <span className={styles.selectedContent}></span>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.display1}>
              <Image
                className={styles.display1}
                src={family02}
                alt='family'
                sizes='(max-width: 799px) 92vw, 0px'
              ></Image>
            </div>
            <div className={styles.display2}>
              <Image
                className={styles.display2}
                src={family02Lg}
                alt='family'
                sizes='(min-width: 800px) 50vw, 0px'
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </SwiperSlide>,
  ];

  return (
    <header className={styles.Header}>
      <Swiper
      dir={language === "ar" ? "rtl" : "ltr"}
      key={language}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {slidesList}
      </Swiper>
    </header>
  );
};

export default Header;
