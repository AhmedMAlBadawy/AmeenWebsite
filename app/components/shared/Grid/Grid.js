import styles from "./Grid.module.css";

const Grid = ({ children, atStart, columns, className }) => {
  return (
    <div
      className={`${styles.Grid}${atStart ? " " + styles.atStart : ""}${
        columns ? " " + styles.columns : ""
      }${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
};

export default Grid;
