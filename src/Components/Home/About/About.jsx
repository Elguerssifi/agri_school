import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Container from "../../Container/Container";
import Title from "../Title/Title";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation(); // Use the translation hook

  return ( 
    <section id="about" className={styles.about_section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.description}>
            <Title title={t('about.title')} />
            <p>
              {t('about.introduction.part1')} <span className={styles.span_green}>{t('about.introduction.ageRange')} </span>, 
              {t('about.introduction.part2')} <span className={styles.span_green}>{t('about.introduction.country')} </span> 
              {t('about.introduction.part3')} {t('about.introduction.educationalPrograms')}. 
              {t('about.introduction.part4')} {t('about.introduction.successKey')} <span>{t('about.introduction.remoteTraining')} </span> 
              {t('about.introduction.professionalism')}.
            </p>
          </div>
          <div className={styles.image_area}>
            <img src="./Assets/images/about_image.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
 
export default About;
