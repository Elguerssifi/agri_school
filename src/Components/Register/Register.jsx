import Container from "../Container/Container"
import styles from "./Register.module.css"

export default function Register() {
  return (
    <section className={styles.register_section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.register_area}>
            <div className={styles.description}>
              <h4>انشئ حسابك</h4>
              <p>وشارك فالدورات لي غادي تفيدك وتحقق طموحاتك !</p>
            </div>
            <div className={styles.register_form}>
              <form>
                <div className={styles.input_container}>
                  <input 
                    type="text" 
                    placeholder="الاسم"
                    required
                  />
                </div>
                <div className={styles.input_container}>
                  <input 
                    type="text" 
                    placeholder="النسب"
                    required
                  />
                </div>
                <div className={styles.input_container}>
                  <div className={styles.icon}>
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.07159 6.92534L12.2903 11.84C12.7071 12.1238 13.2591 12.1238 13.6759 11.84L20.8946 6.92534M5.68017 19.4935H20.2861C21.6305 19.4935 22.7204 18.4217 22.7204 17.0996V7.52382C22.7204 6.20169 21.6305 5.12988 20.2861 5.12988H5.68017C4.33573 5.12988 3.24585 6.20169 3.24585 7.52382V17.0996C3.24585 18.4217 4.33573 19.4935 5.68017 19.4935Z" stroke="#365A00" stroke-width="2.05195" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني"
                    required
                  />
                </div>
                <div className={styles.input_container}>
                  <div className={styles.icon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33619 16.771C1.33619 16.771 2.49485 17.909 2.77879 18.2426C3.24134 18.7362 3.78632 18.9693 4.50076 18.9693C4.56945 18.9693 4.64273 18.9693 4.71142 18.9647C6.07159 18.8779 7.33559 18.3477 8.28359 17.8953C10.8757 16.643 13.1518 14.8651 15.0432 12.6119C16.6049 10.7335 17.6491 8.99681 18.3406 7.13211C18.7665 5.9941 18.9222 5.10745 18.8535 4.27108C18.8077 3.73635 18.6016 3.29303 18.2215 2.91369L16.6599 1.3552C16.4354 1.14497 16.1973 1.03071 15.9637 1.03071C15.6752 1.03071 15.4417 1.20438 15.2951 1.35063C15.2905 1.3552 15.2859 1.35977 15.2814 1.36434C15.002 1.62485 14.7364 1.8945 14.457 2.18243C14.315 2.32869 14.1685 2.47494 14.0219 2.62576L12.7717 3.87346C12.2862 4.35792 12.2862 4.80581 12.7717 5.29027C12.9045 5.42281 13.0327 5.55534 13.1655 5.68331C13.5502 6.07636 13.248 5.77478 13.6465 6.13127C13.6556 6.14041 13.6648 6.14498 13.6694 6.15412C14.0632 6.54717 13.99 6.93108 13.9075 7.19159C13.9029 7.2053 13.8984 7.21901 13.8938 7.23272C13.5686 8.01882 13.1106 8.75921 12.4145 9.64129L12.41 9.64586C11.146 11.1998 9.81327 12.4109 8.34318 13.3387C8.15542 13.4575 7.96307 13.5535 7.77988 13.6449C7.61501 13.7272 7.4593 13.8049 7.32649 13.8871C7.30817 13.8963 7.28985 13.91 7.27153 13.9191C7.11582 13.9968 6.96927 14.0334 6.81814 14.0334C6.43803 14.0334 6.19988 13.7957 6.12203 13.718L5.22435 12.8222C5.06864 12.6668 4.82133 12.4794 4.53281 12.4794C4.24887 12.4794 4.01531 12.6577 3.87334 12.813C3.86876 12.8176 3.86876 12.8176 3.86418 12.8222L1.34076 15.3404C0.869056 15.8066 1.33619 16.771 1.33619 16.771Z" stroke="#365A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="رقم الهاتف"
                    required
                  />
                </div>
                <div className={styles.button_submit}>
                  <button>انشئ حسابي الآن</button>
                </div>
                <div className={styles.redirection}>
                  <p>لدي حساب , <a href="/login">تسجيل الدخول</a></p>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.image_area}>
            <img src="./Assets/images/register_image.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}
