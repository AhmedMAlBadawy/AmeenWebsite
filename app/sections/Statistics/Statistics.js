import Button from "./../../atoms/Button/Button";
import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Grid from "../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";

import Card from "../../components/sections/Statistics/Card/Card";

import { data as dataEn } from "./../../data/sections/Statistics/data";
import { data as dataAr } from "./../../dataAr/sections/Statistics/data";

import styles from "./Statistics.module.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Statistics = () => {
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
    <Card
      key={card.id}
      img={card.img}
      counter={card.counter}
      unit={card.unit}
    />
  ));

  return (
    <div className={styles.Statistics}>
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

export default Statistics;
