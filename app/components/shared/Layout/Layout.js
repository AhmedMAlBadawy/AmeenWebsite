import { useState } from "react";

import Nav from "./../Nav/Nav";
import SideNav from "./../SideNav/SideNav";
import Footer from "./../Footer/Footer";

import styles from "./Layout.module.css";
import { useLanguage } from "../../../contexts/LanguageContext";

const Layout = ({ children, padding }) => {
  const [ShowNav, setShowNav] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const toggleNavHandler = () => {
    setShowNav(!ShowNav);
  };

  return (
    <div
      className={styles.Layout}
      style={{ direction: language === "ar" ? "rtl" : "ltr" }}
    >
      <Nav ShowNav={ShowNav} toggleNavHandler={toggleNavHandler} />

      {ShowNav ? <SideNav toggleNavHandler={toggleNavHandler} /> : null}

      <main
        className={styles.main}
        style={{ padding: padding ? padding : "0px" }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
