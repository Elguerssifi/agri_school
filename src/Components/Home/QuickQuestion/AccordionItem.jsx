import React, { useState } from "react";
import styles from "./QuickQuestion.module.css";

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_header} onClick={toggleAccordion}>
        <h4 className={styles.accordion_title}>{title}</h4>
        <span className={styles.chevron}>
          {isOpen ?
            <>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L7 7.5L13 1.5" stroke="#22262F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </>
            : 
            <>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7.5L7 1.5L1 7.5" stroke="#00173D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </>
           }
        </span>
      </div>
      <div
        className={`${styles.accordion_content} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
