import { imgs } from "./../../../assets/imgs/sections/Procedures";

import links from "./../../shared/links.json";

export const data = {
  title: "Service Steps",
  cards: [
    {
      id: 0,
      img: imgs[0],
      title: "Step 1: Registration",
      description: "Open a medical file easily in 5 minutes",
    },
    {
      id: 1,
      img: imgs[1],
      title: "Step 2: We coordinate with you",
      description:
        "With a specialized medical team, we design your treatment journey.",
    },
    {
      id: 2,
      img: imgs[2],
      title: "Step 3: We start the treatment sessions.",
      description:
        "The Ameener will be at your doorstep for safer and more comfortable home health care.",
    },
  ],
  button: {
    href: links.booking.link,
    title: "start now!",
  },
};
