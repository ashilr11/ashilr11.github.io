import React from "react";
import styles from "./App.module.css";
import Timeline from "./components/timeline/Timeline";
import Header from "./components/header/Header";
import Menubar from "./components/menubar/Menubar";
import MenubarMobile from "./components/menubar/MenubarMobile";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className={styles.root} id="home">
      <Menubar />
      <MenubarMobile />
      <Header />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      <div className={styles.copyright}>
        <p>
          <i>
            &copy; Copyright. Ashil Ramjee. {new Date().getFullYear()}. All
            Rights Reserved.
          </i>
        </p>
      </div>
    </div>
  );
};

export default App;
