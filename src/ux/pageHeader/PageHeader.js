import React from "react";
import styles from "./PageHeader.module.css";
import { Section } from "../../ux";

const PageHeader = () => {
  return (
    <Section background="pageHeaderBackground">
      <div className={styles.pageHeader}>
        <h2><span>A</span>BOUT <span>U</span>S</h2>
        <ul className={styles.socialLinks}>
          <li>facebook</li>
          <li>linkedin</li>
          <li>instagram</li>
          <li>tiktok</li>
        </ul>
      </div>
    </Section>
  );
};

export default PageHeader;
