import { Trans, useTranslation } from 'react-i18next';
import React from "react";
import styles from "./QuickQuestion.module.css";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: (
        <Trans i18nKey="accordion.coursesTitle" components={{ span: <span /> }} />
      ),
      content: t("accordion.coursesContent"),
    },
    {
      title: (
        <Trans i18nKey="accordion.certificatesTitle" components={{ span: <span /> }} />
      ),
      content: t("accordion.certificatesContent"),
    },
    {
      title: (
        <Trans i18nKey="accordion.registrationTitle" components={{ span: <span /> }} />
      ),
      content: t("accordion.registrationContent"),
    },
    {
      title: (
        <Trans i18nKey="accordion.onlineTitle" components={{ span: <span /> }} />
      ),
      content: t("accordion.onlineContent"),
    },
    {
      title: (
        <Trans i18nKey="accordion.supportTitle" components={{ span: <span /> }} />
      ),
      content: t("accordion.supportContent"),
    },
    {
      title: (
        <Trans i18nKey="accordion.discountsTitle" components={{ span: <span /> }} />
      ),
      content: t("accordion.discountsContent"),
    },
  ];

  return (
    <div className={styles.accordion_container}>
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
