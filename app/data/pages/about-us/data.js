import $1 from "./TAQADAM.png";
import $2 from "./Sanabil.png";
import $3 from "./Social Development Bank.png";
import $4 from "./Minstry of work.png";
import $5 from "./Saudi Venture Capital Company.png";
import $6 from "./OQAL.png";
import $7 from "./Badir.png";
import $8 from "./Monsha't.png";
import $9 from "./SE7A.png";

import $10 from "./SE7A.png";
import $11 from "./Saudi Commission for Health Specialities.png";
import $12 from "./GHO.png";
import $13 from "./CBAHI.png";
import $14 from "./Apta.png";
import $15 from "./Apta Home Health.png";

import o1 from "./o1.png";
import o2 from "./o2.png";
import o3 from "./o3.png";

const imgs1 = [$3, $2, $1, $6, $5, $4, $9, $8, $7];
const imgs2 = [$12, $11, $10, $15, $14, $13];

export const content = {
  Title: "About Ameen",
  SubTitle:
    "Ameen is a specialized home electronic clinic that offers a variety of home services. It aims to provide other health and medical options to improve physical health and create a healthy system that supports individuals' independence in their lives and families.",
  Sections: [
    {
      Type: "Paragraph",
      Title: "Supporting and Investment Entities",
      Paragraphs: [
        "Ameen service is provided through an exceptional integrated health technology system, facilitating the request, management, and monitoring of home services, adhering to the highest global health standards related to home care and approved by the Saudi Ministry of Health, the Saudi Commission for Health Specialties, the Saudi Central Board for Accreditation of Healthcare Institutions, the American Physical Therapy Association, the Homecare Therapy Association, the World Health Organization, and others.",
      ],
      Images: [...imgs1],
    },
    {
      Type: "Paragraph",
      Title: "Ameen Resources",
      Paragraphs: [
        "Ameen has over two decades of experience in rehabilitation and building medical and health systems, supported by many governmental health entities and major investors. We have become the best in providing healthcare services.",
      ],
      Images: [...imgs2],
    },
  ],
  founders: [
    {
      oImg: o3,
      title: "Dr.Ahmed Mohammed Sidam",
      position: "CEO of Ameen Care ",
    },
    {
      oImg: o2,
      title: "Dr.Mohammed  Alsulaiman ",
      position: "COO and Medical Director of Ameen Care ",
    },
    {
      oImg: o1,
      title: "Eng.Mahmoud Aboulnaga",
      position: "CTO of Ameen Care",
    },
  ],
};
