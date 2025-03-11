import React from "react";
import styles from "./OurPromise.module.css";
import backgroundRight from "../../assets/ourPromise-background-right.svg";
import backgroundLeft from "../../assets/ourPromise-background-left.svg";
import { Section } from "../../ux";

const OurPromise = () => {
  const isFlipped = true;
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.backgroundContainer}>
          <img src={backgroundRight} alt="" />
        </div>
        <div className={styles.promise}>
          <div className={styles.content}>
            <h3>Our Promise</h3>
            <div className={styles.descriptionContent}>
              <p className={`${styles.title} text-large`}>
                Pristine Apartments
              </p>
              <p className={`${styles.text} text-regular`}>
                With regular inspections, frequent cleanings, and in-house
                maintenance, our teams ensure that all of our apartments remain
                in excellent condition.
              </p>
              <p className={`${styles.title} text-large`}>
                Residential Environment
              </p>
              <p className={`${styles.text} text-regular`}>
                With regular inspections, frequent cleanings, and in-house
                maintenance, our teams ensure that all of our apartments remain
                in excellent condition.
              </p>
              <p className={`${styles.title} text-large`}>
                Tech-Enabled Security
              </p>
              <p className={`${styles.text} text-regular`}>
                With regular inspections, frequent cleanings, and in-house
                maintenance, our teams ensure that all of our apartments remain
                in excellent condition.
              </p>
            </div>
          </div>
          <div className={styles.filler}></div>
        </div>
      </div>

      <div className={styles.card}>
        <div
          className={styles.backgroundContainer}
          style={{ [isFlipped ? "left" : "right"]: "0" }}
        >
          <img src={isFlipped ? backgroundLeft : backgroundRight} alt="" />
        </div>
        <div
          className={styles.promise}
          style={{ flexDirection: isFlipped ? "row-reverse" : "" }}
        >
          <div className={styles.content}>
            <h3>Our Promise</h3>
            <div className={styles.descriptionContent}>
              <p className={`${styles.title} text-large`}>
                Pristine Apartments
              </p>
              <p className={`${styles.text} text-regular`}>
                With regular inspections, frequent cleanings, and in-house
                maintenance, our teams ensure that all of our apartments remain
                in excellent condition.
              </p>
              <p className={`${styles.title} text-large`}>
                Residential Environment
              </p>
              <p className={`${styles.text} text-regular`}>
                With regular inspections, frequent cleanings, and in-house
                maintenance, our teams ensure that all of our apartments remain
                in excellent condition.
              </p>
              <p className={`${styles.title} text-large`}>
                Tech-Enabled Security
              </p>
              <p className={`${styles.text} text-regular`}>
                With regular inspections, frequent cleanings, and in-house
                maintenance, our teams ensure that all of our apartments remain
                in excellent condition.
              </p>
            </div>
          </div>
          <div className={styles.filler}></div>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
