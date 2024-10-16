import Progress from "./Progress"
import styles from "./Quiz.module.css"

export default function Header({title , progress}) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h3>احصل على شهادة معترف بها في <span>{title}</span></h3>
      </div>
      <div className={styles.progress}>
        <Progress progress={progress} />
      </div>
      <div className={styles.description}>
        <h4>الاختبار النهائي للحصول على الشهادة</h4>
        <p>يرجى الإجابة على الأسئلة العشرة بعناية لضمان اجتياز الاختبار بنجاح.</p>
      </div>
    </div>
  )
}
