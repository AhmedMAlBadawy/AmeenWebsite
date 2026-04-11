import Button from "./../../atoms/Button/Button";
import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Grid from "../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";

import Card from "../../components/sections/Procedures/Card/Card";

import { data as dataEn } from "./../../data/sections/Procedures/data";
import { data as dataAr } from "./../../dataAr/sections/Procedures/data";

import styles from "./Procedures.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";

const Procedures = () => {
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
      title={card.title}
      description={card.description}
    />
  ));

  return (
    <div id='procedures' className={styles.Procedures}>
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

export default Procedures;
