import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Container from "../../Container/Container";
import Accordion from "./Accordion";
import styles from "./QuickQuestion.module.css";

export default function QuickQuestion() {
  const {t, i18n } = useTranslation(); 
  const directionClass = i18n.language === 'fr' ? styles.rtl : '';

  return (
    <section className={styles.quick_question_section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.image_with_description}>
            <div className={styles.content}>
              <h4>{t('faqTitle')}</h4>
              <p>
                <Trans i18nKey="faqDescription" components={{ span: <span /> }} />
              </p>
            </div>
            <div className={`${styles.image_area} ${directionClass}`}>
              <img src="./Assets/images/question_image.png" alt="" />
            </div>
          </div>
          <div className={styles.accordion_area}>
            <Accordion />
          </div>
        </div>
      </Container>
    </section>
  );
}
