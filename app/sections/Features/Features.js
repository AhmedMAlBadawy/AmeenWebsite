import Image from "next/image";

import Button from "./../../atoms/Button/Button";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

import Grid from "../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";

import Card from "./../../components/sections/Features/Card/Card";

import heartBg from "./../../assets/imgs/shared/heartBg.svg";

import { data as dataEn } from "./../../data/sections/Features/data";
import { data as dataAr } from "./../../dataAr/sections/Features/data";

import styles from "./Features.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";

const Features = ({ position }) => {
  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  const cardsList = data.cards.map((card) => (
    <Card key={card.id} img={card.img} title={card.title} />
  ));

  return (
    <div className={position === "bottom" ? styles.Packages : styles.Features}>
      <span className={styles.heart}>
        <Image src={heartBg} alt='heart' />
      </span>

      <Container>
        <Grid>
          <SectionTitle title={data.title} />

          <div className={styles.cards}>{cardsList}</div>

          <Button href={data.button.href}>{data.button.title}</Button>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;
