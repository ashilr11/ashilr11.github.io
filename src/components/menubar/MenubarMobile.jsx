import React, { useState } from "react";
import styles from "./MenubarMobile.module.css";
import MenuButton from "../../assets/svg/MenuButton";
import Logo from "../../assets/svg/Logo";

const MenubarMobile = () => {
  const [currentNav, setCurrentNav] = useState("#home");
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    var body = document.querySelector("body");
    if (body.style.overflow === "hidden") {
      body.style.overflow = "visible";
    } else if (body.style.overflow !== "hidden") {
      body.style.overflow = "hidden";
    }
  };

  if (navOpen) {
    return (
      <nav className={`${styles.navi} ${styles.navOpen}`} onClick={toggleNav}>
        <Logo className={styles.logo}></Logo>
        <a
          href="#home"
          onClick={() => setCurrentNav("#home")}
          className={currentNav === "#home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#timeline"
          onClick={() => setCurrentNav("#timeline")}
          className={currentNav === "#timeline" ? "active" : ""}
        >
          Timeline
        </a>
        <a
          href="#skills"
          onClick={() => setCurrentNav("#skills")}
          className={currentNav === "#skills" ? "active" : ""}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setCurrentNav("#projects")}
          className={currentNav === "#projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setCurrentNav("#contact")}
          className={currentNav === "#contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>
    );
  } else {
    return (
      <button className={styles.navButton} onClick={toggleNav}>
        <MenuButton className={styles.menuButton} />
      </button>
    );
  }
};

export default MenubarMobile;
