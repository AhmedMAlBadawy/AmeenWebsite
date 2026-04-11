import Button from "./../../atoms/Button/Button";
import SectionTitle from "./../../atoms/SectionTitle/SectionTitle";

import Grid from "../../components/shared/Grid/Grid";
import Container from "./../../components/shared/Container/Container";
import PackageCard from "./../../components/shared/PackageCard/PackageCard";

import { data as dataEn } from "./../../data/shared/packages";
import { data as dataAr } from "./../../dataAr/shared/packages";

import styles from "./Packages.module.css";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Packages = () => {
  const { language } = useLanguage();
  const [data, setData] = useState(dataAr);

  useEffect(() => {
    if (language === "ar") {
      setData(dataAr);
    } else {
      setData(dataEn);
    }
  }, [language, setData]);

  const packages = data.packages;

  const packagesList = [];

  for (let i = 0; i < 2; i++) {
    packagesList.push(
      <PackageCard
        key={packages[i].id}
        // badge={packages[i].packageLabel}
        // packageImg={packages[i].packageImg}
        noOfSessions={packages[i].noOfSessions}
        price={packages[i].price}
        actionHref={packages[i].actionHref}
        actionText={packages[i].actionText}
      />
    );
  }

  return (
    <div id='packages' className={styles.Packages}>
      <Container>
        <Grid>
          <SectionTitle title={data.inHomeTitle} />

          {/* <PackageCard
            badge={packages[0].packageLabel}
            packageImg={packages[0].packageImg}
            noOfSessions={packages[0].noOfSessions}
            price={packages[0].price}
            actionHref={packages[0].actionHref}
            actionText={packages[0].actionText}
          /> */}

          <div className={styles.cards}>{packagesList}</div>

          {/* <Button href={data.button.href}>{data.button.title}</Button> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Packages;
