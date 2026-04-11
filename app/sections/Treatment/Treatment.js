import { useEffect, useState } from "react";

import Button from "./../../atoms/Button/Button";
import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Grid from "../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";

import BodyShape from "./../../components/sections/Treatment/BodyShape/BodyShape";
import Symptoms from "./../../components/sections/Treatment/Symptoms/Symptoms";

import { data as dataEn } from "./../../data/sections/Treatment/data";
import { data as dataAr } from "./../../dataAr/sections/Treatment/data";

import styles from "./Treatment.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Treatment = () => {
  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  const [SymptomsList, setSymptomsList] = useState(data.symptoms);

  const handlePointerClick = (id) => {
    const newSymptomsList = SymptomsList.map((symptom) => ({
      ...symptom,
      active: id == symptom.id,
    }));

    setSymptomsList(newSymptomsList);
  };

  return (
    <div className={styles.Treatment}>
      <Container>
        <Grid>
          <SectionTitle title={data.title} />

          <div className={styles.content}>
            <Symptoms symptomsList={SymptomsList} />

            <BodyShape
              symptomsList={SymptomsList}
              handlePointerClick={handlePointerClick}
            />
          </div>

          <Button href={data.button.href}>{data.button.title}</Button>
        </Grid>
      </Container>
    </div>
  );
};

export default Treatment;
