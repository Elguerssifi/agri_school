import styles from "./ReviewsStudent.module.css";

export default function Item ({ src, description, name }) {
  return (
    <div className={styles.item}>
      <div className={styles.image_area}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.name}>
        <h6>{name}</h6>
      </div>
    </div>
  );
}
