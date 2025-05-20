import React from "react";
import styles from "./About.module.css";
import { Section } from "../../ux";
import aboutImage from "../../assets/about-image.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Section background="aboutBackground">
      <div className={styles.about}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h4>About</h4>
            <h2>
              <span>W</span>HO <span>W</span>E <span>A</span>RE
            </h2>
          </div>
          <div className={styles.content}>
            <p className="text-regular">
              At Crowned Comforts, we believe where you stay should be just as
              inviting as your destination. Our thoughtfully curated spaces are
              designed to provide the perfect balance of style, comfort, and
              convenience, ensuring that every guest feels at home from the
              moment they arrive.
              <br />
              <br />
              With a commitment to exceptional service and attention to detail,
              we create spaces that go beyond just a place to stay. Whether
              you’re traveling for work, a getaway, or an extended visit, our
              properties are seamlessly designed for effortless living, complete
              with high-end amenities, modern comforts, and the reliability of a
              hotel—without the hassle.
              <br />
              <br />
              Because comfort isn’t just a luxury—it’s a necessity. Welcome to a
              stay that feels just right. Welcome to Crowned Comforts.
            </p>
            <Link to={"about"}>
              <button className="primary-button">Learn More</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default About;
