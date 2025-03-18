import React from "react";
import styles from "./Operations.module.css";
import { Section } from "../../ux";
import { operations } from "./data";

const Operations = () => {
  const isOriginalLayout = true

  return (
    <Section background="">
      <ul className={styles.operations}>
        {operations.map((operation, index) => (
        <li className={styles.contentWrapper} key={index}>
          <div className={styles.imageContainer}>
            <img src={operation.image} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3>{operation.header}</h3>
              <p className="text-regular">
                {operation.description}
              </p>
            </div>
            {isOriginalLayout === operation.originalLayout ? (
            <ul className={styles.cards}>
              {operation.feature.map((feature, index) => (
                <li className={styles.card} key={index}>
                  <p className="text-large">{feature.title}</p>
                  <p className="text-regular">{feature.description}</p>
                </li>
              ))}
            </ul>

            ) : (
              <ul className={`${styles.cards} ${styles.otherLayout}`}>
              {operation.feature.map((feature, index) => (
                <li className={styles.card} key={index}>
                  <p className="text-large">{feature.title}</p>
                  <p className="text-regular">{feature.description}</p>
                </li>
              ))}
            </ul>
            )}
          </div>
        </li>
        ))}
      </ul>
    </Section>
  );
};

export default Operations;
