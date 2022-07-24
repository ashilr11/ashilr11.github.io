import React from "react";
import { education, experience } from "../../data/about";
import styles from "./Timeline.module.css";

const Timeline = () => {
  var edu = [...education];
  var exp = [...experience];

  edu = edu.reverse();
  exp = exp.reverse();

  const [educationIndex, setEducationIndex] = React.useState(0);
  const [experienceIndex, setExperienceIndex] = React.useState(0);

  return (
    <section id="timeline" className={styles.root}>
      <h3 className={styles.quote}>"What do you consider a challenge?"</h3>

      <div className={styles.tables}>
        <div className={styles.table}>
          <h3 className={styles.tableTitle}>Education & Certifications</h3>
          <div className={styles.tableContent}>
            <ul className={styles.leftColumn}>
              {edu.map((e, index) => {
                return (
                  <li
                    key={"education" + index}
                    className={`${styles.listItem} ${
                      educationIndex === index
                        ? styles.chosen
                        : styles.notChosen
                    }`}
                  >
                    <button
                      onClick={() => setEducationIndex(index)}
                      className={styles.dateButton}
                    >
                      {e.dateRange}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className={styles.rightColumn}>
              <span>{edu[educationIndex].name}</span>
              <span>{edu[educationIndex].location}</span>
              <span>{edu[educationIndex].description}</span>
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <h3 className={styles.tableTitle}>Experience</h3>
          <div className={styles.tableContent}>
            <ul className={styles.leftColumn}>
              {exp.map((e, index) => {
                return (
                  <li
                    key={"experience" + index}
                    className={`${styles.listItem} ${
                      experienceIndex === index
                        ? styles.chosen
                        : styles.notChosen
                    }`}
                  >
                    <button
                      onClick={() => setExperienceIndex(index)}
                      className={styles.dateButton}
                    >
                      {e.dateRange}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className={styles.rightColumn}>
              <span>{exp[experienceIndex].role}</span>
              <span>{exp[experienceIndex].location}</span>
              <span>{exp[experienceIndex].description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
