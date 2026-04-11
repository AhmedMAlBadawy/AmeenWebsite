import { imgs } from "./../../../assets/imgs/sections/Statistics/cards";

import links from "./../../shared/links.json";

export const data = {
  title: "Ameen statistics for Home Care",
  cards: [
    {
      id: 0,
      img: imgs[0],
      counter: "+25000",
      unit: "Session",
    },
    {
      id: 1,
      img: imgs[1],
      counter: "+3000",
      unit: "client",
    },
    {
      id: 2,
      img: imgs[2],
      counter: "+100",
      unit: "Specialized therapist",
    },
  ],
  button: {
    href: links.booking.link,
    title: "start now!",
  },
};
