import React from "react";
import styles from "./Bubble.module.css";

interface Props {
  className?: string;
  data: any;
}

const Bubble = ({ className, data }: Props) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.bubble}>
        <img className={styles.icon} src={data.icon} alt="icon" />
      </div>
      <p className={styles.name}>{data.name}</p>
    </div>
  );
};

export default Bubble;
