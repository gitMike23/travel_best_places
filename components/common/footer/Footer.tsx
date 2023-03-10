import React from "react";
import { useRouter } from "next/router";

import styles from "./Footer.module.scss";

type TypeNavItem = {
  icon: string;
  link: string;
};

const navItems: TypeNavItem[] = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explorer",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/place/kyoto",
  },
  {
    icon: "person_outline",
    link: "/profile",
  },
];

const Footer = () => {
  const { push, asPath, pathname } = useRouter();
  return (
    <footer className={styles.footer}>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.icon}
            onClick={() => push(item.link)}
            className={pathname === item.link ? styles.active : ""}
          >
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
