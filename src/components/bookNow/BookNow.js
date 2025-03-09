import React from "react";
import styles from "./BookNow.module.css";
import { Section } from "../../ux";

const BookNow = () => {
  return (
    <Section>
      <div className={styles.bookNow}>
        <h2><span>B</span>OOK <span>A</span> <span>S</span>TAY</h2>
        <div>
        <button className="secondary-button">ContactUs</button>

        </div>
      </div>
    </Section>
  );
};

export default BookNow;
