import React from "react";
import NavBar from "./NavBar";
import styles from "../../styles/Layout.module.css";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />

      {children}
    </div>
  );
};

export default Layout;
