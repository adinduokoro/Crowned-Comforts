import React from "react";
import styles from "./Amenities.module.css";
import { Section } from "../../ux";
import { amenities } from "./data";

const Amenities = () => {
  return (
    <div className={styles.amenitiesBackground}>
      <div className={styles.amenities}>
        <div className={styles.header}>
          <h4>Explore</h4>
          <h2>
            <span>O</span>UR <span>A</span>MENITIES
          </h2>
        </div>
        <div className={styles.content}>
          <ul className={styles.cards}>
            {amenities.map((amenity, index) => (
              <li className={styles.card} style={{backgroundImage: `url(${amenity.image})`}} key={index}>
                <a href="" className="button-header">
                  {amenity.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.buttonContainer}>
            <button className="secondary-button">View All Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
