import React from "react";
import styles from "./Contact.module.css";
import { Section } from "../../ux";
import { contacts } from "./data";

const Contact = () => {
  return (
    <Section background="contactBackground">
      <div className={styles.contact}>
        <ul className={styles.cards}>
          {contacts.map((contact, index) => (
            <li className={styles.card} key={index}>
              <p className="button-regular">{contact.title}</p>
              <p className="text-regular">
                {contact.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Contact;
