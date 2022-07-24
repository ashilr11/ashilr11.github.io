import React from "react";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.root}>
      <div className={styles.content}>
        <h3 className={styles.title}>Projects</h3>

        <ul className={styles.projects}>
          {projects.map((project, index) => {
            return (
              <li className={styles.listItem} key={"skills" + index}>
                <a
                  className={styles.project}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={styles.cover}
                    src={project.cover}
                    alt="Cover"
                  />
                  <span className={styles.name}>{project.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
