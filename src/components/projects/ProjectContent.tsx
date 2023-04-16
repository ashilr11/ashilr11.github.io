import React from "react";
import styles from "./ProjectContent.module.css";

interface ProjectContentProps {
  project: any;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className={styles.root}>
      <h2>{project.name}</h2>

      <img src={project.cover} alt="Cover" />

      <h3>Description</h3>

      <p>{project.description}</p>

      <h3>Technology Used:</h3>

      <ul>
        {project.technologies.map((tech: string, index: number) => {
          return (
            <li key={index}>
              <i>{tech}</i>
            </li>
          );
        })}
      </ul>

      <div className={styles.buttons}>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer">
            Link
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;
