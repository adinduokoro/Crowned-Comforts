import React from "react";
import styles from "./OtherOffer.module.css";
import { Section } from "../../ux";
import otherOfferImg from "../../assets/otherOffer-image.jpg"

const OtherOffer = () => {
  return (
    <Section>
      <div className={styles.otherOffer}>
        <div className={styles.header}>
          <h5>Other Services</h5>
          <p className="text-header">CO-HOSTING OPPURTUNITIES </p>
        </div>
        <div className={styles.content}>
          <p className="text-large">
            When we say “fully furnished,” we mean it. Our rentals come with
            carefully selected furniture, appliances, and amenities to ensure
            that you have everything you need during your stay. From cozy living
            areas and comfortable bedrooms to well-equipped kitchens and modern
            bathrooms, we strive to create a space that meets your expectations
            and provides a seamless living experience.
          </p>
          <div className={styles.imageContainer}>
            <img src={otherOfferImg} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OtherOffer;
