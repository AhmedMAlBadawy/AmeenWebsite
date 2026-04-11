import { imgs } from "../../../assets/imgs/sections/Features";

import links from "../../shared/links.json";

export const data = {
  title: "لماذا أمين ؟",
  cards: [
    {
      id: 0,
      img: imgs[0],
      title: "خطط علاجية مخصصة لاحتياجاتك",
    },
    {
      id: 1,
      img: imgs[1],
      title: "متوفرون 24 ساعة طوال اليوم",
    },
    {
      id: 2,
      img: imgs[2],
      title: "نخدمك في منزلك",
    },
    {
      id: 3,
      img: imgs[3],
      title: "باقات ومزايا متنوعة",
    },
  ],
  button: {
    href: links.booking.link,
    title: "احجز الآن!",
  },
};
