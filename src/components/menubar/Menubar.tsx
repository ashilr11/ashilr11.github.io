import React, { useState } from "react";
import styles from "./Menubar.module.css";

const Menubar = () => {
  const [currentNav, setCurrentNav] = useState("#home");

  return (
    <nav className={`${styles.navi}`}>
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
        Portfolio
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
};

export default Menubar;
