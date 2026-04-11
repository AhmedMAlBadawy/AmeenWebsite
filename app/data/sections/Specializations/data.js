import exImg01 from "./example01.svg";
import exImg02 from "./example02.svg";
import exImg03 from "./example03.svg";
import exImg04 from "./example04.svg";
import exImg05 from "./example05.svg";

import links from "./../../shared/links.json";

export const data = {
  title: "Services available in Ameen",
  cards: [
    {
      id: 0,
      img: exImg01,
      title: "Speech and Language Pathology and Audiology",
    },
    {
      id: 1,
      img: exImg04,
      title: "Occupational Therapy",
    },
    {
      id: 2,
      img: exImg02,
      title: "Clinical Nutrition",
    },
    {
      id: 3,
      img: exImg03,
      title: "Personal Trainer",
    },
    {
      id: 4,
      img: exImg05,
      title: "Physical Therapy",
    },
  ],
  button: {
    href: links.booking.link,
    title: "Book now!",
  },
};
