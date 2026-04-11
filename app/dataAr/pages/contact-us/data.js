import CallIcon from "./../../../assets/icons/pages/contact-us/call";
import LocationIcon from "./../../../assets/icons/pages/contact-us/location";
import MailIcon from "./../../../assets/icons/pages/contact-us/mail";

import links from "./../../shared/links.json";

export const data = {
  title: "تواصل معنا",
  description: "يسعدنا التواصل معكم من خلال القنوات التالية",
  contacts: [
    {
      id: 0,
      href: links.tel.link,
      icon: <CallIcon />,
      title: "920034027",
    },
    {
      id: 1,
      href: links.location,
      icon: <LocationIcon />,
      title: "زورونا في المقر الرئيسى",
    },
    {
      id: 2,
      href: links.email.link,
      icon: <MailIcon />,
      title: "support@ameen.com",
    },
  ],
  form: {
    title: "نموذج الاتصال",
    NameField: {
      placeholder: "الاسم",
    },
    PhoneField: {
      placeholder: "رقم الهاتف",
    },
    EmailField: {
      placeholder: "البريد الإلكترونى",
    },
    MsgField: {
      placeholder: "الرسالة الخاصة بك",
    },
    button: {
      title: "ارسال",
    },
  },
};
