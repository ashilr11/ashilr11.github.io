import React from "react";
import BodyOutline from "../../assets/svg/BodyOutline";
import styles from "./Header.module.css";
import "animate.css";

const Header = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div
            className={`${styles.bodyContainer} animate__animated animate__pulse`}
          >
            <BodyOutline className={styles.bodyOutline} />
          </div>
          <div className={`${styles.info} animate__animated animate__pulse`}>
            <p className={styles.introduce}>
              Hi there &#128075; &nbsp; My name is
            </p>

            <h3 className={styles.name}>Ashil Ramjee</h3>
            <p className={styles.job}>I'm a Full-Stack Software Engineer</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <a href="#contact" className={`${styles.contact}`}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
