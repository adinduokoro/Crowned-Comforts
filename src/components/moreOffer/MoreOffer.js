import React from "react";
import styles from "./MoreOffer.module.css";
import { Section } from "../../ux";
import { offers } from "./data";

const MoreOffer = () => {
  return (
    <Section background="moreOfferBackground">
      <div className={styles.moreOffer}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <span>F</span>ULLY <span>F</span>URNISHED <span>S</span>HORT-
            <span>T</span>ERM <span>R</span>ENTALS
          </h3>
          <div className={`${styles.subHeader} text-regular`}>
            When we say “fully furnished,” we mean it. Our rentals come with
            carefully selected furniture, appliances, and amenities to ensure
            that you have everything you need during your stay. From cozy living
            areas and comfortable bedrooms to well-equipped kitchens and modern
            bathrooms, we strive to create a space that meets your expectations
            and provides a seamless living experience.
          </div>
        </div>
        <ul className={styles.grid}>
          {offers.map((offer, index) => (
            <li className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <img src={offer.img} alt={offer.title} />
              </div>
              <div className={styles.description}>
                <h4>{offer.title}</h4>
                <p className="text-regular">
                  {offer.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default MoreOffer;
