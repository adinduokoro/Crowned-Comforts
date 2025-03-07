import React from "react";
import styles from "./Amenities.module.css";
import { amenities } from "./data";
import { Link } from "react-router-dom";

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
              <li
                className={styles.card}
                style={{ backgroundImage: `url(${amenity.image})` }}
                key={index}
              >
                <a href="" className="button-header">
                  {amenity.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.buttonContainer}>
            <Link to={"services"}>
              <button className="secondary-button">View All Services</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
