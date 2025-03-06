import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Layout = () => {
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
    <div className={styles.layout}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
