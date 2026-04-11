import { imgs } from "./../../../assets/imgs/sections/Features";

import links from "./../../shared/links.json";

export const data = {
  title: "Why Ameen?",
  cards: [
    {
      id: 0,
      img: imgs[0],
      title: "Customized treatment plans for your needs",
    },
    {
      id: 1,
      img: imgs[1],
      title: "Available 24 hours",
    },
    {
      id: 2,
      img: imgs[2],
      title: "Serve you at your home",
    },
    {
      id: 3,
      img: imgs[3],
      title: "Packages with various options",
    },
  ],
  button: {
    href: links.booking.link,
    title: "Book now!",
  },
};
