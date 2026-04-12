import Image from "next/image";
import Link from "next/link";

import EyeIcon from "./../../../assets/icons/shared/eye";
import ClockIcon from "./../../../assets/icons/shared/clock";

import styles from "./FirstBlogsCard.module.css";
import { useLanguage } from "../../../contexts/LanguageContext";
import { resolveMediaUrl } from "../../../../utils/resolveMediaUrl";

const FirstBlogsCard = ({
  img,
  title,
  CoverImageName,
  description,
  views,
  minutesToRead,
  urlKey,
}) => {
  const href = `/blogs/${urlKey}`;
  const { language } = useLanguage();

  return (
    <Link href={href.replace(/ /g, "-")} passHref>
      <div className={styles.FirstBlogsCard} style={{ overflow: "hidden" }}>
        <div className={styles.imgBox}>
          <img
            className={styles.img}
            src={resolveMediaUrl(img)}
            alt={CoverImageName}
            style={{ height: "400px" }}
          />
          {/* <Image
            //width={1600}
            //height={800}
            layout='fill'
            className={styles.img}
            src={img}
            alt={CoverImageName}
          /> */}
        </div>

        <div className={styles.content}>
          <p className={styles.label}>
            {language === "ar" ? "مشاركة مدونة " : "Blog post"}
          </p>
          <h3 className={styles.title}>{title}</h3>

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          <div className={styles.views}>
            <EyeIcon />

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

          <div className={styles.minutesToRead}>
            <ClockIcon />

            <span>
              {language === "ar"
                ? (+minutesToRead === 0 || +minutesToRead > 10) &&
                  `${minutesToRead} دقيقة`
                : (+minutesToRead === 0 || +minutesToRead > 10) &&
                  `${minutesToRead} minutes`}

              {language === "ar"
                ? +minutesToRead === 1 && "دقيقة واحدة"
                : +minutesToRead === 1 && "1 minute"}

              {language === "ar"
                ? +minutesToRead === 2 && "دقيقتان"
                : +minutesToRead === 2 && "2 minutes"}

              {language === "ar"
                ? +minutesToRead > 2 &&
                  +minutesToRead < 11 &&
                  `${minutesToRead} دقائق`
                : +minutesToRead > 2 &&
                  +minutesToRead < 11 &&
                  `${minutesToRead} minutes`}

              {language === "ar"
                ? !minutesToRead && minutesToRead !== 0 && "لا يوجد بيانات"
                : !minutesToRead && minutesToRead !== 0 && "No data"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FirstBlogsCard;
