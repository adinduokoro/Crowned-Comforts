import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { links } from "./data";
import logoLight from "../../assets/logo-light-color.svg";
import logo from "../../assets/logo.svg"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(`.${styles.navigation}`);
    const navLinks = document.querySelector(`.${styles.navLinks}`);

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: 2,
      onEnter: () => {
        nav.classList.add(styles.active);
        navLinks.classList.add(styles.active);
        setScrolled(true)
      },
      onLeaveBack: () => {
        nav.classList.remove(styles.active);
        navLinks.classList.remove(styles.active);
        setScrolled(false)
      },
    });
  }, []);

  return (
    <header className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <div className={styles.imageContainer}>
        <img src={scrolled ? logo : logoLight} alt="Logo" />
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
      </div>
    </header>
  );
};

export default Navigation;
