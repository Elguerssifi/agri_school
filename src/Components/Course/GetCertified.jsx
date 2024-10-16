import styles from "./course.module.css"

export default function GetCertified() {
  return (
    <section className={styles.certified_section}>
      <div className={styles.certified_container}>
        <div className={styles.certified_description}>
          <h4>احصل على شهادة معتمدة</h4>
          <p>شارك إنجازاتك على منصات التواصل الاجتماعي وكن جاهزاً للتطور المهني في القطاع الفلاحي.</p>
        </div>
        <div className={styles.certified_img}>
          <img 
            src="/Assets/images/certified_img.png" 
            alt="certified with agri school academy" 
          />
        </div>
      </div>
    </section>
  )
}
