import styles from "./StudentsReviews.module.css"

export default function Item ({ src, description, name }) {
  return (
    <div className={styles.item}>
      <div className={styles.image_area}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.description}>
        <div className={styles.stars_reviews}>
          <img src="/Assets/images/stars_1.png" alt="star" />
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.name}>
        <h6>{name}</h6>
      </div>
    </div>
  );
}
