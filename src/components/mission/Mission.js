import React from "react";
import styles from "./Mission.module.css";
import { Section } from "../../ux";
import { missions } from "./data";

const Mission = () => {
  return (
    <Section>
      <div className={styles.mission}>
        <ul className={styles.familyOwned}>
          <li className={styles.header}>
            <p className={`${styles.top} text-large`}>
              Family Owned and Operated
            </p>
            <div className={styles.bottom}>
              <>
                <div className={styles.line}></div>
                <p className={`${styles.title} text-header`}>
                  Crowned Comforts: Stay Royal. Lease Smart.
                </p>
              </>
            </div>
          </li>
          <li className={`${styles.paragraphOne} text-regular`}>
            At Crowned Comforts, we redefine the rental experience by providing
            thoughtfully designed spaces that blend the comfort of home with the
            convenience of a premium stay. Our properties are tailored for
            business travelers, medical professionals, families, and remote
            workers who seek reliability, quality, and ease when away from home. 
          </li>
          <li className={`${styles.paragraphTwo} text-regular`}>
             Whether you're relocating, on an extended work assignment, or enjoying a family getaway, we create an effortless, elevated stay
            with carefully curated furnishings, modern amenities, and a seamless
            guest experience—because you deserve nothing less.
          </li>
        </ul>
        <h3>OUR MISSION</h3>
        <ul className={styles.cards}>
          {missions.map((mission, index) => (
            <li className={styles.card} key={index}>
              <h5>{mission.title}</h5>
              <p className="text-regular">{mission.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Mission;
