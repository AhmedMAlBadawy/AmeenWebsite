import Image from "next/image";

import pointer from "./../../../../assets/imgs/sections/Treatment/pointer.svg";
import pointerActive from "./../../../../assets/imgs/sections/Treatment/pointer-active.svg";

import styles from "./BodyShape.module.css";

const BodyShape = ({ symptomsList, handlePointerClick }) => {
  const pointersList = [];

  for (let i = 0; i < symptomsList.length - 1; i++) {
    pointersList.push(
      <li
        key={symptomsList[i].id}
        className={`${styles.pointer} ${styles[symptomsList[i].style]} ${
          symptomsList[i].active ? styles.active : ""
        }`}
        onClick={() => handlePointerClick(symptomsList[i].id)}
      >
        {symptomsList[i].active ? (
          <Image src={pointerActive} draggable={false} alt='pointer' />
        ) : (
          <Image src={pointer} draggable={false} alt='pointer' />
        )}
      </li>
    );
  }

  return (
    <div className={styles.BodyShape}>
      <ul>{pointersList}</ul>
    </div>
  );
};

export default BodyShape;
