import Link from "next/link";
import React from "react";
import styles from "../../styles/NavBar.module.css";

const NavBar = () => {
  const { container, navbar, navLinks, navItem } = styles;

  return (
    <nav className={navbar}>
      <ul className={navLinks}>
        <li className={navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={navItem}>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
