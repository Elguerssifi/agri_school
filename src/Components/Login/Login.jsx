import Container from "../Container/Container"
import styles from "./Login.module.css"

export default function Login() {
  return (
    <section className={styles.login_section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.register_area}>
            <div className={styles.description}>
              <h4>تسجيل الدخول</h4>
              <p>خليك على بال  بكل الدورات والتكوينات الجديدة!</p>
            </div>
            <div className={styles.register_form}>
              <form>
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
                  <input 
                    type="password" 
                    placeholder="الرمز السري"
                    required
                  />
                </div>
                <div className={styles.input_checkbox}>
                  <input 
                    type="checkbox" 
                    required
                    id="touch"
                  />
                  <label htmlFor="touch">ابقى متصلا</label>
                </div>
                <div className={styles.button_submit}>
                  <button>تسجيل الدخول</button>
                </div>
                <div className={styles.redirection}>
                  <p>ليس لدي حساب بعد , <a href="/register">إنشاء حساب</a></p>
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
