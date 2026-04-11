import styles from "./Symptoms.module.css";

const Symptoms = ({ symptomsList }) => {
  const symptomsListComp = [];

  for (let i = 0; i < symptomsList.length - 1; i++) {
    symptomsListComp.push(
      <li
        key={symptomsList[i].id}
        className={`${styles.symptom} ${
          symptomsList[i].active ? styles.active : ""
        }`}
      >
        <h3>{symptomsList[i].arName}</h3>

        {symptomsList[i].active && (
          <p className={styles.description}>{symptomsList[i].description}</p>
        )}
      </li>
    );
  }

  return (
    <ul className={styles.Symptoms}>
      {symptomsListComp}

      <li className={styles.symptom}>
        <h3>{symptomsList[symptomsList.length - 1].arName}</h3>
      </li>
    </ul>
  );
};

export default Symptoms;
