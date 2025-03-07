import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className={`${styles.footerBackground} button-regular`}>
      Copyright ⓒ {year} - Crowed Comforts - All Rights Reserve
    </div>
  );
};

export default Footer;
