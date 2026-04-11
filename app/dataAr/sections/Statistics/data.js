import { imgs } from "./../../../assets/imgs/sections/Statistics/cards";

import links from "./../../shared/links.json";

export const data = {
  title: "إحصائيات أمين للرعاية المنزلية",
  cards: [
    {
      id: 0,
      img: imgs[0],
      counter: "+25000",
      unit: "جلسة",
    },
    {
      id: 1,
      img: imgs[1],
      counter: "+3000",
      unit: "عميل",
    },
    {
      id: 2,
      img: imgs[2],
      counter: "+100",
      unit: "أخصائي متخصص",
    },
  ],
  button: {
    href: links.booking.link,
    title: "ابدأ الآن!",
  },
};
