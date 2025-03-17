import React, { useState } from "react";
import styles from "./Faq.module.css";
import { Section } from "../../ux";
import { faqs } from "./data";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section>
      <div className={styles.faq}>
        <h3 className={styles.header}>
          Frequently asked questions
        </h3>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFAQ(index)}
                className={`${styles.faqQuestion} button-link`}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ""
                } text-regular`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
