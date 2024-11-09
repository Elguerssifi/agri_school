import styles from "./StudyVideos.module.css";

export default function FooterStudy({ onNext, onBack }) {
  return (
    <div className={styles.footer}>
      <div className={styles.resume}>
        <h3>الخلاصة:</h3>
        <p>اختيار نظام الري المناسب يعتمد على نوع المحصول، خصائص التربة، وتوافر المياه. يُنصح المزارعون باستخدام الأنظمة التي تُقلل من هدر المياه وتُزيد من الإنتاجية لتحقيق زراعة مستدامة</p>
      </div>
      <div className={styles.button_footer}>
        <button className={styles.button_back} onClick={onBack}>العودة إلى الدرس السابق</button>
        <button 
          className={styles.button_next} 
          onClick={onNext} 
          disabled={!onNext}  // Disable button if Next is not allowed
        >
          تابع
        </button>
      </div>
    </div>
  );
}
