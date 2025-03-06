import React from "react";
import styles from "./Navigation.module.css";
import { links } from "./data";
import logo from "../../assets/logo-light-color.svg";

const Navigation = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <div className={styles.imageContainer}>
          <img src={logo} alt="" />
        </div>
        <ul className={styles.navLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <a className="button-link" href="/">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* close icon */}
      </div>
    </header>
  );
};

export default Navigation;
