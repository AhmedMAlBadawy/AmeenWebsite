import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ href, width, className, children }) => {
  return (
    <div
      className={`${styles.Button}${className ? " " + className : ""}`}
      style={width && { width: width }}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default Button;
