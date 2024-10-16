import { Trans, useTranslation } from 'react-i18next';
import Container from "../../Container/Container";
import Title from "../Title/Title";
import Item from "./Item";
import styles from "./ReviewsStudent.module.css";

export default function ReviewsStudent() {
  const { t } = useTranslation();

  const studentReviews = t('reviews', { returnObjects: true });

  return (
    <div className={styles.review_section}>
      <Container>
        <div className={styles.title_description}>
          <Title title={t('reviewsTitle')} />
          <p>
            <Trans i18nKey="reviewsDescription">
              تعاملنا مع كل طالب كفرد من الأسرة قد خلق هذه المنهجية. <br />
              العديد من الفرص التعليمية وشواهد معترف بها من قبل الجهات المختصة.
            </Trans>
          </p>
        </div>
        <div className={styles.items}>
          {studentReviews.map((review, index) => (
            <Item
              key={index}
              src={`./Assets/images/student_${index + 1}.jpg`} // Ensure image paths are correct
              description={<Trans i18nKey={`reviews.${index}.description`} components={{ span: <span /> }} />}
              name={review.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
