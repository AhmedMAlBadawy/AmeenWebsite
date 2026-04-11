import Image from "next/image";

import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Slider from "./../../components/sections/Testimonial/Slider/Slider";

import angles from "./../../assets/imgs/sections/Testimonial/angles.svg";

import { data as dataEn } from "./../../data/sections/Testimonial/data.js";
import { data as dataAr } from "./../../dataAr/sections/Testimonial/data.js";

import styles from "./Testimonial.module.css";
import { useLanguage } from "../../contexts/LanguageContext.js";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);
  return (
    <div id='testimonials' className={styles.testimonials}>
      <SectionTitle title={data.title} subtitle={data.subtitle} />

      <Slider feedbacks={data.feedbacks} />

      <div className={styles.angles}>
        <Image src={angles} alt='background' />
      </div>
    </div>
  );
};

export default Testimonial;
