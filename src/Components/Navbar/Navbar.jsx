import Container from "../Container/Container";
import styles from "./Navbar.module.css";
import { useTranslation } from 'react-i18next'; 

export default function Navbar() {
  const { t, i18n } = useTranslation(); 
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
  };

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.row}>
          <div className={styles.logo}>
            <img src="/Assets/images/logo.png" alt="logo" />
          </div>
          <div className={styles.nav_link}>
            <ul>
              <li><a href="#home">{t('navbar.home')}</a></li>
              <li><a href="#about">{t('navbar.about')}</a></li>
              <li><a href="#services">{t('navbar.services')}</a></li>
              <li><a href="#contact">{t('navbar.contact')}</a></li>
            </ul>
          </div>
          <div className={styles.services_action}>
            <ul>
              <li><button>{t('navbar.createAccount')}</button></li>
              <li><a href="">{t('navbar.joinTeam')}</a></li>
              <li className={styles.lang} onClick={() => changeLanguage(i18n.language === 'ar' ? 'fr' : 'ar')}>
                <span>
                  {i18n.language === 'ar' ? t('navbar.french') : t('navbar.arabic')}
                </span>
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6041 9.48456H17.7855L15.6518 15.1336C13.7038 14.682 11.8682 13.8385 10.2567 12.6546C12.1387 10.5959 13.392 8.04164 13.8687 5.29347H16.5154C16.7849 5.29347 17.0433 5.18643 17.2339 4.99589C17.4244 4.80535 17.5315 4.54692 17.5315 4.27745C17.5315 4.00799 17.4244 3.74956 17.2339 3.55902C17.0433 3.36848 16.7849 3.26143 16.5154 3.26143H9.78429V1.01602C9.78429 0.746556 9.67725 0.488127 9.4867 0.297586C9.29616 0.107045 9.03773 0 8.76827 0C8.4988 0 8.24037 0.107045 8.04983 0.297586C7.85929 0.488127 7.75225 0.746556 7.75225 1.01602V3.26143H1.01602C0.746556 3.26143 0.488127 3.36848 0.297586 3.55902C0.107045 3.74956 0 4.00799 0 4.27745C0 4.54692 0.107045 4.80535 0.297586 4.99589C0.488127 5.18643 0.746556 5.29347 1.01602 5.29347H3.66784C4.14225 8.04135 5.39391 10.5958 7.27472 12.6546C5.54176 13.9236 3.55635 14.8054 1.45291 15.2403C1.18345 15.2693 0.936524 15.4041 0.766466 15.6151C0.596408 15.8262 0.517144 16.0961 0.546112 16.3656C0.575079 16.635 0.709905 16.882 0.920929 17.052C1.13195 17.2221 1.40189 17.3013 1.67136 17.2724C1.74668 17.2742 1.8219 17.2657 1.89488 17.247C4.40068 16.7343 6.75343 15.6474 8.76827 14.0719C10.586 15.4975 12.6868 16.5193 14.9304 17.0692L11.3896 26.4166H14.016L15.3877 22.4744H21.9613L23.3482 26.4166H26L19.6041 9.48456ZM11.8316 5.29347C11.4094 7.55088 10.352 9.64101 8.78351 11.3185C7.21384 9.64183 6.15626 7.55134 5.73544 5.29347H11.8316ZM16.2411 20.102L18.6948 13.0762L21.1282 20.102H16.2411Z" fill="black"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}