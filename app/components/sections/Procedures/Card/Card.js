import Image from "next/image";

import styles from "./Card.module.css";

const Card = ({ img, title, description }) => {
  return (
    <div className={styles.Card}>
      <Image src={img} alt={title} />

      <h3>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
