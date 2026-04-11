import { useState, useEffect } from "react";
import Image from "next/image";

import Container from "./../../../shared/Container/Container";

import right from "./../../../../assets/imgs/sections/Testimonial/right.svg";
import left from "./../../../../assets/imgs/sections/Testimonial/left.svg";

import styles from "./Slider.module.css";

const Slider = ({ feedbacks }) => {
  let noOfFeedbacks;

  const [Start, setStart] = useState(0);
  const [WinWidth, setWinWidth] = useState(0);

  noOfFeedbacks = 3;

  if (WinWidth >= 900) {
    noOfFeedbacks = 3;
  }

  useEffect(() => {
    setWinWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
    });
  }, []);

  const handleNext = () => {
    setStart((Start) => Start + 1);
  };

  const handlePrev = () => {
    setStart((Start) => Start - 1);
  };

  const slidesList = feedbacks.map((feedback, index) => {
    return (
      <div
        key={index}
        className={`${styles.slide} ${
          index < Start
            ? styles.hiddenRightSlide
            : index === Start
            ? styles.rightSlide
            : index === Start + 1
            ? styles.middleSlide
            : index === Start + 2
            ? styles.leftSlide
            : index > Start + 2
            ? styles.hiddenLeftSlide
            : null
        }`}
      >
        <Image src={feedback} alt='feedback' />
      </div>
    );
  });

  return (
    <div className={styles.Slider}>
      <Container>
        <div className={styles.sliderSystem}>
          <button
            className={styles.Button}
            onClick={handleNext}
            disabled={Start + noOfFeedbacks >= feedbacks.length}
          >
            <Image src={right} alt='right' />
          </button>

          <div className={styles.slides}>{slidesList}</div>

          <button
            className={styles.Button}
            onClick={handlePrev}
            disabled={Start === 0}
          >
            <Image src={left} alt='left' />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
