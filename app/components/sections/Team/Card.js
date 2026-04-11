import Image from "next/image";

import styles from "./Card.module.css";

const Card = ({ img, memberName, title }) => {
  return (
    <div className={styles.Card}>
      <Image
        width={250}
        height={225}
        //priority={true}
        src={img}
        alt={memberName}
      />

      <div>
        <h3 className={styles.name}>{memberName}</h3>

        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
