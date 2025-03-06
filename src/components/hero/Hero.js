import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero-bg-image.jpg";

const Hero = () => {
  return (
    <main
      className={`${styles.hero} parallax`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.gradient}></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>
            <span>S</span>TAY IN <span>C</span>OMFORT. <br />
            <span>S</span>TAY WITH <span>C</span>ROWNED.
          </h1>
          <p className="text-header">
            Your home away from home—for business, travel, or anything in
            between.
          </p>
          <div className={styles.buttons}>
            <button className="primary-button button-regular">
              Book Your Stay
            </button>
            <button className="secondary-button button-regular">
              Contact US
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
