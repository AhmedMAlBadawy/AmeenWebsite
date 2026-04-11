import Link from "next/link";

import styles from "./ContactButton.module.css";

const ContactButton = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <div className={styles.ContactButton}>{children}</div>
    </Link>
  );
};

export default ContactButton;
