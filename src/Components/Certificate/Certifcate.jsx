import Container from "../Container/Container"
import styles from "./Certificate.module.css"

export default function Certifcate() {
  return (
    <div className={styles.certifcate_container}>
      <Container>
        <div className={styles.get_certificate}>
          <div className={styles.title}>
            <h3>مبروووك عليك شهادة معترف بها من طرف المختصين الكبار في <span>تقنيات تصميم أنظمة الري</span></h3>
          </div>
          <div className={styles.certifcate_img}>
            <img 
              src="\Assets\images\certified_img.png" 
              alt="certificate" 
            />
          </div>
          <div className={styles.note_with_pdf}>
            <p>بمعدل : 6/10</p>
            <button>تحميل نسخة  Pdf</button>
          </div>
        </div>
        <div className={styles.leave_comment_review}>
          <div className={styles.header}>
            <p> اعطي تقييما لتجربتك مع <span>Agrischool</span></p>
            <div className={styles.make_stars}>
              <div className={styles.buttons_review}>
                {Array.from({ length: 5 }, (_, index) => (
                  <button key={index + 1}>{index + 1}</button>
                ))}
              </div>
              <div className={styles.stars}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5306 1.39318C11.7753 0.639911 12.841 0.639913 13.0858 1.39319L15.337 8.32175C15.4465 8.65863 15.7604 8.88671 16.1146 8.88671H23.3997C24.1918 8.88671 24.5211 9.90023 23.8803 10.3658L17.9865 14.6479C17.6999 14.8561 17.58 15.2251 17.6895 15.562L19.9407 22.4905C20.1855 23.2438 19.3233 23.8702 18.6825 23.4047L12.7888 19.1226C12.5022 18.9144 12.1142 18.9144 11.8276 19.1226L5.9338 23.4047C5.29303 23.8702 4.43088 23.2438 4.67563 22.4905L6.92686 15.562C7.03632 15.2251 6.91641 14.8561 6.62985 14.6479L0.736056 10.3658C0.0952837 9.90023 0.424598 8.88671 1.21664 8.88671H8.50176C8.85597 8.88671 9.1699 8.65863 9.27936 8.32175L11.5306 1.39318Z" fill="#E9B800"/>
                </svg>
                <span>نجوم</span>
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <p>اعطي رأيك، أو ما يمكننا تحسينه </p>
            <div className={styles.textarea}>
              <textarea placeholder="(اختياري)"></textarea>
            </div>
          </div>
          <div className={styles.footer}>
            <button>ارسال</button>
          </div>
        </div>
      </Container>
    </div>
  )
}
