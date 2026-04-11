import Image from "next/image";

import Button from "./../../../atoms/Button/Button";

import badgeImg from "./../../../assets/imgs/components/PackageCard/badge.svg";

import styles from "./PackageCard.module.css";
import { useLanguage } from "../../../contexts/LanguageContext";

const PackageCard = ({
  badge,
  packageImg,
  noOfSessions,
  price,
  actionHref,
  actionText,
}) => {
  const { language } = useLanguage();

  return (
    <div className={styles.PackageCard}>
      {badge && (
        <div className={styles.badge}>
          <Image src={badgeImg} alt={badge}></Image>
        </div>
      )}

      <div className={styles.inner}>
        {/* <Image src={packageImg} alt='packageImg'></Image> */}

        <div>
          <p>{noOfSessions}</p>

          <h2>
            <span>{price}</span>{" "}
            <span>{language === "ar" ? ` ريال سعودي` : "SAR"}</span>
          </h2>
        </div>

        {actionHref && <Button href={actionHref}>{actionText}</Button>}
      </div>
    </div>
  );
};

export default PackageCard;
