import React, { useState } from "react";

import styles from "./Lightbox.module.css";

interface Content {
  title?: string;
  body: any;
}

type LightboxProps = {
  className?: string;
  content: Array<Content>;
  step: number;
  onClose: any;
  widthConstraint?: boolean;
};

export default function Lightbox({
  className = "",
  content,
  step,
  onClose,
  widthConstraint = true,
}: LightboxProps) {
  const [currentStep, setCurrentStep] = useState(step);

  const incrementStep = () => {
    if (currentStep < content.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const decrementStep = () => {
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={`${styles.fullscreen} ${className}`} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div
        className={`${styles.container} ${
          widthConstraint ? styles.widthConstraint : ""
        } animate__animated animate__zoomIn`}
        onClick={(e) => e.stopPropagation()}
      >
        {content.length > 1 && (
          <button className={styles.previous} onClick={decrementStep}>
            &#10094;
          </button>
        )}
        <div className={styles.content}>
          {content[currentStep - 1].title && (
            <h2 className={styles.title}>{content[currentStep - 1].title}</h2>
          )}
          {content[currentStep - 1].body}
        </div>
        {content.length > 1 && (
          <button className={styles.next} onClick={incrementStep}>
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
}
