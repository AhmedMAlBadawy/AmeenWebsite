import Image from "next/image";

import styles from "./Card.module.css";

const Card = ({ img, title }) => {
  return (
    <div className={styles.Card}>
      <Image width={100} height={100} src={img} alt={title} />

      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Card;
