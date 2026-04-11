import Image from "next/image";

import styles from "./Card.module.css";

const Card = ({ img, counter, unit }) => {
  return (
    <div className={styles.Card}>
      <Image src={img} alt={`${counter} ${unit}`}></Image>

      <div>
        <h3 className={styles.counter}>{counter}</h3>

        <p>{unit}</p>
      </div>
    </div>
  );
};

export default Card;
