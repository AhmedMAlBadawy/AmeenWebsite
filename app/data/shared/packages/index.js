import { packagesImgs } from "./packagesImgs";

import links from "./../links.json";

export const data = {
  inHomeTitle: "We Offer Home Physical Therapy Services at the Best Prices",
  title: "Ameen's Therapeutic Prices",
  subtitle: "We Provide the Package That Suits You",
  packages: [
    {
      id: 0,
      packageLabel: "Starting from",
      packageImg: packagesImgs[0],
      noOfSessions: "Initial consultation starts from",
      price: "300",
      actionHref: links.booking.link,
      actionText: "Book Now",
    },
    {
      id: 1,
      packageLabel: "Starting from",
      packageImg: packagesImgs[1],
      noOfSessions: "Therapeutic session starts from",
      price: "250",
      actionHref: links.booking.link,
      actionText: "Book Now",
    },
    {
      id: 2,
      packageImg: packagesImgs[2],
      noOfSessions: "2 Sessions",
      price: "699",
    },
    {
      id: 3,
      packageImg: packagesImgs[3],
      noOfSessions: "4 Sessions",
      price: "1349",
    },
    {
      id: 4,
      packageImg: packagesImgs[4],
      noOfSessions: "6 Sessions",
      price: "1999",
    },
    {
      id: 5,
      packageImg: packagesImgs[5],
      noOfSessions: "8 Sessions",
      price: "2599",
    },
    {
      id: 6,
      packageImg: packagesImgs[6],
      noOfSessions: "10 Sessions",
      price: "3299",
    },
    {
      id: 7,
      packageImg: packagesImgs[7],
      noOfSessions: "12 Sessions",
      price: "3799",
    },
    {
      id: 8,
      packageImg: packagesImgs[8],
      noOfSessions: "14 Sessions",
      price: "4449",
    },
    {
      id: 9,
      packageImg: packagesImgs[9],
      noOfSessions: "16 Sessions",
      price: "4949",
    },
    {
      id: 10,
      packageImg: packagesImgs[10],
      noOfSessions: "18 Sessions",
      price: "5549",
    },
    {
      id: 11,
      packageImg: packagesImgs[11],
      noOfSessions: "20 Sessions",
      price: "5999",
    },
    {
      id: 12,
      packageImg: packagesImgs[12],
      noOfSessions: "22 Sessions",
      price: "6499",
    },
    {
      id: 13,
      packageImg: packagesImgs[13],
      noOfSessions: "24 Sessions",
      price: "7099",
    },
  ],
  button: {
    href: "links.packagesPage.link",
    title: "Discover More Packages",
  },
};
