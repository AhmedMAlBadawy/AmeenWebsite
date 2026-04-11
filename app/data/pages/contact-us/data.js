import CallIcon from "./../../../assets/icons/pages/contact-us/call";
import LocationIcon from "./../../../assets/icons/pages/contact-us/location";
import MailIcon from "./../../../assets/icons/pages/contact-us/mail";

import links from "./../../shared/links.json";

export const data = {
  title: "Contact Us",
  description:
    "We are happy to connect with you through the following channels:",
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
      title: "Visit us at the main headquarters.",
    },
    {
      id: 2,
      href: links.email.link,
      icon: <MailIcon />,
      title: "support@ameen.com",
    },
  ],
  form: {
    title: "Contact Form",
    NameField: {
      placeholder: "Name",
    },
    PhoneField: {
      placeholder: "Phone Number",
    },
    EmailField: {
      placeholder: "Email",
    },
    MsgField: {
      placeholder: "Your Message",
    },
    button: {
      title: "Send",
    },
  },
};
