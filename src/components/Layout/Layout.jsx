import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout__left"]}>
        <ul>
          <li>Profile</li>
          <li>Posts</li>
          <li>Gallery</li>
          <li>ToDo</li>
        </ul>
      </div>
      <div className={styles["layout__right"]}>{children}</div>
    </div>
  );
}

export default Layout;
