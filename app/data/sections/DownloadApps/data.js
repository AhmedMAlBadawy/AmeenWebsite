import { imgs } from "../../../assets/imgs/sections/DownloadApps";

export const data = {
  title: "Ameen App for Home Care",
  apps: [
    {
      id: 0,
      qrCode: imgs[1],
      appIcon: imgs[3],
      appStore: imgs[5],
      appLink: "https://play.google.com/store/apps/details?id=com.ameencare",
      appName: "Scan with your phone",
      appDesc: "To download from Play Store",
    },
    {
      id: 1,
      qrCode: imgs[0],
      appIcon: imgs[2],
      appStore: imgs[4],
      appLink:
        "https://apps.apple.com/sa/app/%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A3%D9%85%D9%8A%D9%86-ameen-care/id6444684389",
      appName: "Scan with your phone",
      appDesc: "To download from App Store",
    },
  ],
};
