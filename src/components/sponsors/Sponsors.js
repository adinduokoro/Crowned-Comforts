import React from "react";
import styles from "./Sponsors.module.css";
import { Section } from "../../ux";
import { sponsors } from "./data";

const Sponsors = () => {
  return (
    <Section>
      <div className={styles.sponsors}>
        <div className={styles.header}>
          <h3>Trusted by thousands of leading companies</h3>
          <p className="text-regular">
            Our tenants include employees from a majority of Fortune 100
            companies as well as other leading organizations.
          </p>
        </div>
        <div className={styles.content}>
          <ul className={styles.cards}>
            {sponsors.map((sponsor, index) => (
              <li className={styles.card} key={index}>
                <img src={sponsor.image} alt={sponsor.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Sponsors;
