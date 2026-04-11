import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Container from "./../../components/shared/Container/Container";

import Card from "./../../components/sections/Team/Card";

import { data as dataEn } from "./../../data/sections/Team/data";
import { data as dataAr } from "./../../dataAr/sections/Team/data";

import styles from "./Team.module.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Team = () => {
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
      memberName={card.memberName}
      title={card.title}
    />
  ));

  return (
    <div className={styles.Team}>
      <Container>
        <SectionTitle title={data.title} />

        <div className={styles.cards}>{cardsList}</div>
      </Container>
    </div>
  );
};

export default Team;
