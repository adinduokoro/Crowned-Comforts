import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../../components";

const Layout = () => {
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
