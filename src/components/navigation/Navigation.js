import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { links } from "./data";
import logoLight from "../../assets/logo-light-color.svg";
import logo from "../../assets/logo.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

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
        setScrolled(true);
      },
      onLeaveBack: () => {
        nav.classList.remove(styles.active);
        navLinks.classList.remove(styles.active);
        setScrolled(false);
      },
    });
  }, []);

  return (
    <header className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <Link to={"/"} className={styles.logoContainer}>
          <img src={scrolled ? logo : logoLight} alt="Logo" />
        </Link>
        <ul className={styles.navLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <Link className="button-link" to={link.to}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
