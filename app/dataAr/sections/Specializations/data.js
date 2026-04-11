import exImg01 from "./example01.svg";
import exImg02 from "./example02.svg";
import exImg03 from "./example03.svg";
import exImg04 from "./example04.svg";
import exImg05 from "./example05.svg";

import links from "./../../shared/links.json";

export const data = {
  title: "الخدمات المتوفرة في أمين",
  cards: [
    {
      id: 0,
      img: exImg01,
      title: "سمع ونطق و تخاطب",
    },
    {
      id: 1,
      img: exImg04,
      title: "العلاج الوظيفي",
    },
    {
      id: 2,
      img: exImg02,
      title: "التغذية العلاجية",
    },
    {
      id: 3,
      img: exImg03,
      title: "مدرب شخصي",
    },
    {
      id: 4,
      img: exImg05,
      title: "العلاج الطبيعي",
    },
  ],
  button: {
    href: links.booking.link,
    title: "حجز الآن!",
  },
};
