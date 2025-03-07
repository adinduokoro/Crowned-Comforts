import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  useEffect(() => {
    const nav = document.querySelector(`.${styles.navigation}`);

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: 2,
      onEnter: () => {
        nav.classList.add(styles.active);
      },
      onLeaveBack: () => {
        nav.classList.remove(styles.active);
      },
    });
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.outlet}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
