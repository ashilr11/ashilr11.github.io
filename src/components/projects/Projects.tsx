import React, { useState } from "react";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";
import Lightbox from "../lightbox/Lightbox";
import ProjectContent from "./ProjectContent";

const Projects = () => {
  const [showAfricaSteel, setShowAfricaSteel] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showHarvester, setShowHarvester] = useState(false);
  const [showPneumo, setShowPneumo] = useState(false);
  const [showBookshelf, setShowBookshelf] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showThinkLess, setShowThinkLess] = useState(false);
  const [showFrameco, setShowFrameco] = useState(false);
  const [showTimelink, setShowTimelink] = useState(false);

  const setState = (show: boolean, index: number) => {
    switch (index) {
      case 0:
        setShowAfricaSteel(show);
        break;
      case 1:
        setShowFrameco(show);
        break;
      case 2:
        setShowPortfolio(show);
        break;
      case 3:
        setShowHarvester(show);
        break;
      case 4:
        setShowPneumo(show);
        break;
      case 5:
        setShowBookshelf(show);
        break;
      case 6:
        setShowTimer(show);
        break;
      case 7:
        setShowThinkLess(show);
        break;
      case 8:
        setShowTimelink(show);
        break;
    }
  };
  return (
    <section id="projects" className={styles.root}>
      <div className={styles.content}>
        <h3 className={styles.title}>Portfolio</h3>

        <ul className={styles.projects}>
          {projects.map((project, index) => {
            return (
              <li className={styles.listItem} key={"skills" + index}>
                <button
                  className={styles.project}
                  onClick={() => setState(true, index)}
                >
                  <img
                    className={styles.cover}
                    src={project.cover}
                    alt="Cover"
                  />
                  <span className={styles.name}>{project.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {showAfricaSteel && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[0]} />,
              },
            ]}
            step={1}
            onClose={() => setShowAfricaSteel(!showAfricaSteel)}
            widthConstraint={false}
          />
        )}

        {showFrameco && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[1]} />,
              },
            ]}
            step={1}
            onClose={() => setShowFrameco(!showFrameco)}
            widthConstraint={false}
          />
        )}

        {showPortfolio && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[2]} />,
              },
            ]}
            step={1}
            onClose={() => setShowPortfolio(!showPortfolio)}
            widthConstraint={false}
          />
        )}

        {showHarvester && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[3]} />,
              },
            ]}
            step={1}
            onClose={() => setShowHarvester(!showHarvester)}
            widthConstraint={false}
          />
        )}

        {showPneumo && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[4]} />,
              },
            ]}
            step={1}
            onClose={() => setShowPneumo(!showPneumo)}
            widthConstraint={false}
          />
        )}

        {showBookshelf && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[5]} />,
              },
            ]}
            step={1}
            onClose={() => setShowBookshelf(!showBookshelf)}
            widthConstraint={false}
          />
        )}

        {showTimer && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[6]} />,
              },
            ]}
            step={1}
            onClose={() => setShowTimer(!showTimer)}
            widthConstraint={false}
          />
        )}

        {showThinkLess && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[7]} />,
              },
            ]}
            step={1}
            onClose={() => setShowThinkLess(!showThinkLess)}
            widthConstraint={false}
          />
        )}

        {showTimelink && (
          <Lightbox
            content={[
              {
                body: <ProjectContent project={projects[8]} />,
              },
            ]}
            step={1}
            onClose={() => setShowTimelink(!showTimelink)}
            widthConstraint={false}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
