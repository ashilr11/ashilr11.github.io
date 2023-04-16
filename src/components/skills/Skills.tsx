import React from "react";
import { skills } from "../../data/skills";
import Bubble from "./Bubble";
import styles from "./Skills.module.css";
import "animate.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.root}>
      <div className={styles.content}>
        <h3 className={styles.title}>My Skills</h3>

        <ul className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <li key={"skill" + index} className={styles.listItem}>
                <Bubble data={skill} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
