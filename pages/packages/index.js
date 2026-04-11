import Features from "./../../app/sections/Features/Features";

import Layout from "./../../app/components/shared/Layout/Layout";
import Container from "./../../app/components/shared/Container/Container";
import PackageCard from "./../../app/components/shared/PackageCard/PackageCard";

import { data } from "./../../app/data/shared/packages";

import styles from "./index.module.css";
import Head from "next/head";

const Packages = () => {
  const packages = data.packages;

  const packageCardsList = [];
  for (let i = 1; i < packages.length; i++) {
    packageCardsList.push(
      <PackageCard
        key={packages[i].id}
        packageImg={packages[i].packageImg}
        noOfSessions={packages[i].noOfSessions}
        price={packages[i].price}
      />
    );
  }

  return (
    <Layout>
      <Head>
        <title>حزم أمين</title>

        <meta
          name='description'
          content='دور الأمين هو إدارة وأخذ التاريخ المرضي للعميل لإجراء كشف طبي مبني على أفضل الممارسات العالمية،'
        />
        <meta name='keywords' content='packages, الحزم ' />
        <meta name='title' content='الحزم' />
      </Head>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title}</h1>

          <PackageCard
            // badge={packages[0].packageLabel}
            packageImg={packages[0].packageImg}
            noOfSessions={packages[0].noOfSessions}
            price={packages[0].price}
            actionHref={packages[0].actionHref}
            actionText={packages[0].actionText}
          />

          <div>
            <h3>{data.subtitle}</h3>

            <div className={styles.grid}>{packageCardsList}</div>
          </div>
        </div>
      </Container>

      <div className={styles.Features}>
        <Features />
      </div>
    </Layout>
  );
};

export default Packages;
