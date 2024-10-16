import styles from "./course.module.css"
export default function ItemAboutCourse({
  about_icon,
  about_description,
  about_sub_description

}) {
  return (
    <div className={styles.item_about_course}>
      <div className={styles.icon}>{about_icon}</div>
      <div className={styles.description}>
        <span>{about_description}</span>
        </div>
      <div className={styles.sub_description}>
        <p>{about_sub_description}</p>
      </div>
    </div>
  )
}
