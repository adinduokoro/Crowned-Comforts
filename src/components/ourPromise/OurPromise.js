import React from "react";
import styles from "./OurPromise.module.css";
import backgroundRight from "../../assets/ourPromise-background-right.svg";
import backgroundLeft from "../../assets/ourPromise-background-left.svg";
import { promises } from "./data";



const OurPromise = () => {
  return (
    <div className={styles.cards}>
      {promises.map((promise, index) => {
        const isFlipped = index % 2 !== 0; // Flip if index is odd (nth-child even)

        return (
          <div
            className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
            key={index}
          >
            <div className={styles.backgroundContainer}>
              <img src={isFlipped ? backgroundLeft : backgroundRight} alt="" />
            </div>
            <div className={styles.promise}>
              <div className={styles.content}>
                <h3>{promise.title}</h3>
                  {promise.text}
              </div>
              <div className={styles.filler}></div>
            </div>
          </div>
        );
      })}
      <div className={styles.button}>
        <button className="primary-button">Let's Connect</button>
      </div>
    </div>
  );
};

export default OurPromise;
