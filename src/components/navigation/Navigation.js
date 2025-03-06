import React, { useEffect } from "react";
import styles from "./Navigation.module.css";
import { links } from "./data";
import logo from "../../assets/logo-light-color.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  useEffect(() => {
    // Trigger color change when the top of the navbar passes the viewport height
    gsap.to(`.${styles.navigation}`, {
      scrollTrigger: {
        trigger: `body`, // The element that triggers the animation
        start: "top top", // When the top of the navbar reaches the top of the viewport
        end: "bottom top", // Optional: where the animation ends
        scrub: 2, // Smooth scrubbing for a nice transition effect
        toggleClass: {
          targets: `.${styles.navigation}`, // The element where the class should be toggled
          className: styles.active, // Add this class when the scroll position triggers the action
        },
      },
    });
  }, []);

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
