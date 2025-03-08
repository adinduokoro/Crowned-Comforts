import React from "react";
import styles from "./Cta.module.css";
import { Section } from "../../ux";

const Cta = () => {
  return (
    <Section background={"ctaBackground"}>
      <div className={styles.cta}>
        <div className={styles.top}>
          <h3 className="text-header">
            Whether you're interested in an apartment for a travel nursing
            assignment or...
          </h3>
          <p className="text-regular">
            Whether you’re planning an extended corporate stay or arranging
            accommodations for your business team, don’t hesitate to reach out
            to learn more about our premium apartments.
          </p>
        </div>
        <div className={styles.bottom}>
          <button className="secondary-button">Contact Us</button>
        </div>
      </div>
    </Section>
  );
};

export default Cta;
