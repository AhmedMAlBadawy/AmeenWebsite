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
  Title: "عن أمين",
  SubTitle:
    "أمين هي عيادة إلكترونية منزلية متخصصة تقدم خدمة جلسات العلاج الطبيعي والتأهيل، وتسعى لتوفير الخيارات الصحية والطبية الأخرى للمساهمة في رفع مستوى الصحة الجسدية وخلق نظام صحي ودعم استقلالية الأشخاص في حياتهم وعائلاتهم.",
  Sections: [
    {
      Type: "Paragraph",
      Title: "الجهات الداعمة واﻻﺳﺘﺜﻤﺎرﻳﺔ",
      Paragraphs: [
        "تقدم خدمة أمين عبر نظام تقني صحي استثنائي متكامل، يقوم على تسهيل طلب وإدارة ومراقبة الخدمة المنزلية بالاعتماد على أعلى المعايير الصحية العالمية المتعلقة بالرعاية المنزلية والمعتمدة من (وزارة الصحة السعودية، هيئة التخصصات الصحية، المركز السعودي لاعتماد المنشآت الصحية، الجمعية الأمريكية للعلاج الطبيعي، جمعية العلاج الطبيعي المنزلي ومنظمة الصحة العالمية وغيرها).",
      ],
      Images: [...imgs1],
    },
    {
      Type: "Paragraph",
      Title: "مصادر أمين",
      Paragraphs: [
        "التاهيل وبناء الانظمه الطبيه والصحيه بخبرات تتجاوز عقدين من الزمن وبدعم من العديد من الجهات الصحيه الحكوميه وكبار المستثمرين واستطعنا ان نكون الافضل في تقديم الخدمه الصحيه ونحن مؤسسي شركه امين ناتيكم بمختلف التخصصات والخبرات في كل من خدمات العلاج الطبيعي",
      ],
      Images: [...imgs2],
    },
  ],
  founders: [
    {
      oImg: o3,
      title: "أخصائى أحمد محمد سيدام",
      position: "المدير التنفيذى لشركة أمين",
    },
    {
      oImg: o2,
      title: "أخصائى محمد ال سليمان",
      position: "المدير الطبى لشركة أمين",
    },
    {
      oImg: o1,
      title: "م.محمود ابو النجا",
      position: "المدير التقنى لشركة أمين",
    },
  ],
};
