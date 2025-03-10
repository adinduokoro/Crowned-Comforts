import React from "react";
import styles from "./OurGuarantees.module.css";
import { Section } from "../../ux";
import { guarantees } from "./data";

const OurGuarantees = () => {
  return (
    <Section>
      <div className={styles.ourGuarantees}>
        <h3 className={styles.header}>
          Excellence Delivered: The Three Guarantees When Leasing to Crowned
          Comforts
        </h3>
        <ul className={styles.cards}>
          {guarantees.map((guarantee, index) => (
            <li className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <img src={guarantee.image} alt={guarantee.title} />
              </div>
              <div className={styles.content}>
                <p className={`${styles.title} text-header`}>
                  {guarantee.title}
                </p>
                <p className={`${styles.description} text-regular`}>
                  {guarantee.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default OurGuarantees;
