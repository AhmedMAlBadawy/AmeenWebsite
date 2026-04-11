import React from "react";

import Image from "next/image";
import Link from "next/link";

import eyeIcon from "./../../../../assets/imgs/shared/eyeIcon.svg";

import styles from "./Card.module.css";
import { useLanguage } from "../../app/contexts/LanguageContext";

const Card = ({ articleImage, title, CoverImageName, description, views }) => {
  const href = `/blogs/${title}`;

  const { language } = useLanguage();

  return (
    <Link href={href.replace(/ /g, "-")} passHref>
      <div className={styles.articleCard}>
        <div>
          <Image
            width={245}
            height={163}
            className={styles.articleImage}
            src={articleImage}
            alt={CoverImageName}
          />
        </div>

        <div className={styles.articleContent}>
          <h4 className={styles.title}>{title}</h4>

          <p>{description}</p>
        </div>

        <div className={styles.views}>
          <div>
            <Image width={22} height={15} src={eyeIcon} alt='views' />
          </div>
          <span>
            {language === "ar"
              ? (+views === 0 || +views > 10) && `${views} مشاهدة`
              : (+views === 0 || +views > 10) && `${views} views`}

            {language === "ar"
              ? +views === 1 && "مشاهدة واحدة"
              : +views === 1 && "1 view"}

            {language === "ar"
              ? +views === 2 && "مشاهدتان"
              : +views === 2 && "2 views"}

            {language === "ar"
              ? +views > 2 && +views < 11 && `${views} مشاهدات`
              : +views > 2 && +views < 11 && `${views} views`}

            {language === "ar"
              ? !views && views !== 0 && "لا يوجد بيانات"
              : !views && views !== 0 && "No data"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
