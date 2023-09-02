import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>My Portfolio</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
