import React from "react";
import styles from "./Amenities.module.css";
import { Section } from "../../ux";

const Amenities = () => {
  return (
    <Section background="amenitiesBackground">
      <div className={styles.amenities}>
        <div className={styles.header}>
          <h4>Explore</h4>
          <h2>OUR AMENITIES</h2>
        </div>
        <div className={styles.content}>
          <ul className={styles.cards}>
            <li key={""}>
              <a href="" className="button-header">
                FREE WIFI
              </a>
            </li>
          </ul>
          <div className={styles.buttonContainer}>
            <button className="secondary-button">View All Services</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Amenities;
