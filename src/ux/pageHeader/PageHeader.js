import React from "react";
import styles from "./PageHeader.module.css";
import { Section } from "../../ux";
import { socialLinks } from "./data";

const PageHeader = ({ header }) => {
  return (
    <Section background="pageHeaderBackground">
      <div className={styles.pageHeader}>
        <h2>
          {header}
        </h2>
        <ul className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <li className={styles.link} key={index}>
              <img src={link.icon} alt={link.name} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default PageHeader;
