import React from "react";
import styles from "./MoreOffer.module.css";
import { Section } from "../../ux";

const MoreOffer = () => {
  return (
    <Section background="moreOfferBackground">
      <div className={styles.moreOffer}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <span>F</span>ULLY <span>F</span>URNISHED <span>S</span>HORT-<span>T</span>ERM <span>R</span>ENTALS
          </h3>
          <div className={`${styles.subHeader} text-regular`}>When we say “fully furnished,” we mean it. Our rentals come with carefully selected furniture, appliances, and amenities to ensure that you have everything you need during your stay. From cozy living areas and comfortable bedrooms to well-equipped kitchens and modern bathrooms, we strive to create a space that meets your expectations and provides a seamless living experience.</div>
        </div>
        <ul className={styles.grid}>
          <li className={styles.card}>
            <div className={styles.imageContainer}>
              <img src="" alt="" />
            </div>
            <h4>RESTFUL BEDROOMS</h4>
            <p>Experience a good night's sleep in our thoughtfully furnished bedrooms. We provide quality mattresses, fresh linens, ample storage space, and a peaceful ambiance to ensure your comfort.</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Section>
  );
};

export default MoreOffer;
