import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import styles from "./Hero.module.css";
import Container from '../../Container/Container';

export default function Hero() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <section className={styles.hero_section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>
                {t('hero.introduction.part1')} <span>{t('hero.introduction.highlight')}</span> {t('hero.introduction.part2')}
              </h1>
            </div>
            <div className={styles.about_courses}>
              <button>{t('hero.discoverCourses')}</button>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.hero_footer}>
        <Container>
          <div className={styles.items}>
            <div className={styles.item}>
              <span>{t('hero.subscriberCount')}</span>
              <span>420,000 +</span>
            </div>
            <div className={styles.item}>
              <span>{t('hero.studentCount')}</span>
              <span>10,000 +</span>
            </div>
            <div className={styles.item}>
              <span>{t('hero.successRate')}</span>
              <span>100 %</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
