import Layout from "./../app/components/shared/Layout/Layout";

import Header from "./../app/sections/Header/Header";
import Features from "./../app/sections/Features/Features";
import Procedures from "./../app/sections/Procedures/Procedures";
import Packages from "./../app/sections/Packages/Packages";
import Treatment from "./../app/sections/Treatment/Treatment";
import Team from "./../app/sections/Team/Team";
import Testimonial from "./../app/sections/Testimonial/Testimonial";
import Statistics from "./../app/sections/Statistics/Statistics";
import Articles from "./../app/sections/Articles/Articles";
import DownloadApps from "../app/sections/DownloadApps/DownloadApps";
import Head from "next/head";
import Specializations from "../app/sections/Specializations/Specializations";

const HomePage = () => {
  return (
    <Layout padding='80px 0 4vw'>
      <Head>
        <title>
      أمين للرعاية المنزلية وإعادة التأهيل | تأهيل كبار السن | رعاية طبية منزلية
        </title>
        <link rel='canonical' href='https://ameen.care/' />
        <meta
          name='description'
          content='
نقدم في أمين أفضل جلسات علاج طبيعي منزلي ووجلسات علاج وظيفي، نطق وبلع، تغذية علاجية في الرياض وجدة والدمام ومدن المملكة على يد أفضل الأخصائيين'
        />
        <meta
          name='title'
          content='أمين للرعاية المنزلية وإعادة التأهيل | تأهيل كبار السن | رعاية طبية منزلية'
        />
        <meta
          name='keywords'
          content='علاج طبيعي منزلي, علاج وظيفي, نطق وبلع, تغذية علاجية, علاج طبيعي منزلي الرياض, علاج طبيعي منزلي الدمام, علاج طبيعي منزلي جدة'
        />

        <meta
          name='google-site-verification'
          content='Vi5Bgd1GKu-nAekxVJeAPTxleNjG9T9oU2nXR7ZylVM'
        />

        {/*<meta name='facebook-domain-verification' content='7x7r68114qfqhalmrna0adsp0rhydn' />*/}
        <meta
          name='facebook-domain-verification'
          content='1x32h9c4peqv757nfmcstssrwe27l3'
        />
      </Head>

      <Header />

      <Features />

      <Specializations />

      <Procedures />

      <Packages />

      <DownloadApps />

      <Treatment />

      <Team />

      <Testimonial />

      <Statistics />

      <Articles />
    </Layout>
  );
};

export default HomePage;
