import React from "react";
import styles from "./Section.module.css";
import aboutBackground from "../../assets/about-bg-image.jpg";
import contactBackground from "../../assets/contact-image.jpg";
import aboutHeaderBackgroundImage from "../../assets/about-header-image.jpg";
import ctaBackground from "../../assets/cta-bg-image.jpg"

const Section = ({ children, background }) => {
  return (
    <div className={styles.section}>
      {/* Causes Section Background */}
      {background === "aboutBackground" && (
        <div
          style={{ backgroundImage: `url(${aboutBackground})` }}
          className={`${styles[background]} ${styles.backgroundWrapper} parallax`}
        ></div>
      )}

      {/* Amenities Section Background */}
      {background === "amenitiesBackground" && (
        <div
          className={`${styles[background]} ${styles.backgroundWrapper}`}
        ></div>
      )}

      {/* Contact Section Background */}
      {background === "contactBackground" && (
        <div
          style={{ backgroundImage: `url(${contactBackground})` }}
          className={`${styles[background]} ${styles.backgroundWrapper} parallax`}
        >
          <div className={styles.contactOverlay}></div>
        </div>
      )}

      {/* About Page Header Section Background */}
      {background === "pageHeaderBackground" && (
        <div
          style={{ backgroundImage: `url(${aboutHeaderBackgroundImage})` }}
          className={`${styles[background]} ${styles.backgroundWrapper} parallax`}
        >
          <div className={styles.aboutOverlay}></div>
        </div>
      )}

      {/* Cta Section Background */}
      {background === "ctaBackground" && (
        <div
          style={{ backgroundImage: `url(${ctaBackground})` }}
          className={`${styles[background]} ${styles.backgroundWrapper}`}
        >
          <div className={styles.ctaOverlay}></div>
        </div>
      )}

      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Section;
