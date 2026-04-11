import styles from "./FormButton.module.css";

const FormButton = ({ width, className, children, onClick }) => {
  return (
    <button
      className={`${styles.FormButton}${className ? " " + className : ""}`}
      style={width && { width: width }}
      type='submit'
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default FormButton;
