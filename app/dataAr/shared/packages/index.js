import { packagesImgs } from "./packagesImgs";

import links from "./../links.json";

export const data = {
  inHomeTitle: "نقدم خدمات علاج طبيعي منزلي بأفضل الأسعار",
  title: "أسعار أمين العلاجية",
  subtitle: "نوفر الباقة المناسبة لك",
  packages: [
    {
      id: 0,
      packageLabel: "يبدأ السعر من",
      packageImg: packagesImgs[0],
      noOfSessions: "تبدأ جلسة الفحص من",
      price: "300",
      actionHref: links.booking.link,
      actionText: "احجز الآن",
    },
    {
      id: 1,
      packageLabel: "يبدأ السعر من",
      packageImg: packagesImgs[1],
      noOfSessions: "تبدأ الجلسة العلاجية من",
      price: "250",
      actionHref: links.booking.link,
      actionText: "احجز الآن",
    },
    {
      id: 2,
      packageImg: packagesImgs[2],
      noOfSessions: "جلستين",
      price: "699",
    },
    {
      id: 3,
      packageImg: packagesImgs[3],
      noOfSessions: "4 جلسات",
      price: "1349",
    },
    {
      id: 4,
      packageImg: packagesImgs[4],
      noOfSessions: "6 جلسات",
      price: "1999",
    },
    {
      id: 5,
      packageImg: packagesImgs[5],
      noOfSessions: "8 جلسات",
      price: "2599",
    },
    {
      id: 6,
      packageImg: packagesImgs[6],
      noOfSessions: "10 جلسات",
      price: "3299",
    },
    {
      id: 7,
      packageImg: packagesImgs[7],
      noOfSessions: "12 جلسة",
      price: "3799",
    },
    {
      id: 8,
      packageImg: packagesImgs[8],
      noOfSessions: "14 جلسة",
      price: "4449",
    },
    {
      id: 9,
      packageImg: packagesImgs[9],
      noOfSessions: "16 جلسة",
      price: "4949",
    },
    {
      id: 10,
      packageImg: packagesImgs[10],
      noOfSessions: "18 جلسة",
      price: "5549",
    },
    {
      id: 11,
      packageImg: packagesImgs[11],
      noOfSessions: "20 جلسة",
      price: "5999",
    },
    {
      id: 12,
      packageImg: packagesImgs[12],
      noOfSessions: "22 جلسة",
      price: "6499",
    },
    {
      id: 13,
      packageImg: packagesImgs[13],
      noOfSessions: "24 جلسة",
      price: "7099",
    },
  ],
  button: {
    href: links.packagesPage.link,
    title: "اكتشف باقي الباقات",
  },
};
