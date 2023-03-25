import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__left"]}>
        <ul>
          <li className={styles["list-style"]}>Profile</li>
          <li className={styles["list-style"]}>Posts</li>
          <li className={styles["list-style"]}>Gallery</li>
          <li className={styles["list-style"]}>ToDo</li>
        </ul>
      </div>
      <div className={styles["layout__right"]}>{children}</div>
    </div>
  );
}

export default Layout;
