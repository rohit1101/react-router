import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__left"]}>
        <ul>
          <li className={styles["list-style"]}>Profile</li>
          <li className={styles["list-style"]}>
            <Link to="/posts">Posts</Link>
          </li>
          <li className={styles["list-style"]}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={styles["list-style"]}>
            <Link to="/todo">ToDo</Link>
          </li>
        </ul>
      </div>
      <div className={styles["layout__right"]}>{children}</div>
    </div>
  );
}

export default Layout;
