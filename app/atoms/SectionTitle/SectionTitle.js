import Image from "next/image";

import titleLine from "./../../assets/imgs/atoms/SectionTitle/titleLine.svg";

import styles from "./SectionTitle.module.css";

const SectionTitle = ({ title, subtitle, atStart }) => {
  return (
    <div
      className={`${styles.SectionTitle}${atStart ? " " + styles.atStart : ""}`}
    >
      {title && <h2 className={styles.title}>{title}</h2>}

      {subtitle && <h3>{subtitle}</h3>}

      <Image src={titleLine} alt='line' />
    </div>
  );
};

export default SectionTitle;
