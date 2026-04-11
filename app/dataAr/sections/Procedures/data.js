import { imgs } from "./../../../assets/imgs/sections/Procedures";

import links from "./../../shared/links.json";

export const data = {
  title: "خطوات الخدمة",
  cards: [
    {
      id: 0,
      img: imgs[0],
      title: "الخطوة الأولى: التسجيل",
      description: "تستطيع التسجيل بسهولة بالنقر على خيار التسجيل أدناه.",
    },
    {
      id: 1,
      img: imgs[1],
      title: "الخطوة الثانية: ننسق معك",
      description: "تتواصل مع أخصائي يفهم حالتك.",
    },
    {
      id: 2,
      img: imgs[2],
      title: "الخطوة الثالثة: نبدأ العلاج",
      description:
        "سيكون الأخصائي الخاص بك على عتبة منزلك، مما يجعل الرعاية الصحية أكثر أمانًا وراحة من أي وقت مضى.",
    },
  ],
  button: {
    href: links.booking.link,
    title: "ابدأ الآن!",
  },
};
