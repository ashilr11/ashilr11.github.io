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
    <>
      <div id="home"></div>
      <Menubar />
      <MenubarMobile />
      <Header />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />

      <div className={styles.copyright}>
        <p>
          <i>&copy; Copyright. Ashil Ramjee. 2022. All Rights Reserved.</i>
        </p>
      </div>
    </>
  );
};

export default App;
