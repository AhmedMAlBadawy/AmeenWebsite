import styles from "./InputField.module.css";

const InputField = ({ placeholder, type, className, onChange, value }) => {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          className={`${styles.InputField} ${styles.textarea}${
            className ? " " + className : ""
          }`}
          placeholder={`${placeholder} *`}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
        ></textarea>
      ) : (
        <input
          className={`${styles.InputField}${className ? " " + className : ""}`}
          type={type || "text"}
          placeholder={`${placeholder} *`}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
        />
      )}
    </>
  );
};

export default InputField;
