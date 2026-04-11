import Button from "../../atoms/Button/Button";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

import Grid from "../../components/shared/Grid/Grid";
import Container from "../../components/shared/Container/Container";

import { data as dataEn } from "../../data/sections/Specializations/data";
import { data as dataAr } from "../../dataAr/sections/Specializations/data";

import styles from "./Specializations.module.css";
import Image from "next/image";
import {
  live_getway_base_URL,
  testing_getway_base_URL,
} from "../../../enviroments/enviroments";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Specializations = () => {
  const [SpecilaizationList, setSpecilaizationList] = useState([]);
  const [Isloaded, setIsloaded] = useState(false);

  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  const cardsList = SpecilaizationList.length ? (
    SpecilaizationList.map((card) => (
      <div className={styles.specialization_card} key={card.id}>
        <div className={styles.image}>
          <div className={styles["outline-image"]}>
            {card.image && (
              <Image
                src={card.image}
                layout='fill'
                // height={90}
                alt={card.title}
              />
            )}
          </div>
        </div>
        <h3>{card.title}</h3>
      </div>
    ))
  ) : (
    <>{Isloaded ? <>لا يوجد خدمات</> : <>جارى تحميل الخدمات ..</>}</>
  );

  useEffect(() => {
    fetch(`${live_getway_base_URL}api/v1.0/Specializations/GetSpecializations`)
      .then((response) => response.json())
      .then((data) => {
        setSpecilaizationList(
          data.map((m) => {
            return {
              id: m.id,
              image: m.imageBase64,
              title: m.nameAr,
            };
          })
        );
        setIsloaded(true);
      })
      .catch((err) => {
        setIsloaded(true);
        console.error(err);
      });
  }, []);

  return (
    <div id='specializations' className={styles.Specializations}>
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

export default Specializations;
