import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;