import React from "react";
import styles from "./Offer.module.css";
import { Section } from "../../ux";
import { offers } from "./data";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <Section background="offerBackground">
      <div className={styles.offer}>
        <div className={styles.header}>
          <h2>
            <span>W</span>HAT <span>W</span>E <span>O</span>FFER
          </h2>
          <p className="text-large">
            Where you stay matters. We provide beautifully designed, fully
            equipped spaces that blend comfort, style, and convenience—ensuring
            every stay feels effortless.
          </p>
        </div>
        <ul className={styles.cards}>
          {offers.map((offer, index) => (
            <li className={styles.card} key={index}>
              <div className={styles.content}>
                <div className={styles.imageContainer}>
                  <img src={offer.image} alt={offer.title} />
                </div>
                <h3>{offer.title}</h3>
                <p className="text-regular">{offer.description}</p>
              </div>
              <div className={styles.buttonContainer}>
                <Link to={"services"}>
                <button className="primary-button">Read More</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Offer;
