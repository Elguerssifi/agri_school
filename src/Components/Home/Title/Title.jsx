import styles from "./Title.module.css"
import { useTranslation } from 'react-i18next'; 

const Title = ({title}) => {
  const { i18n } = useTranslation(); 
  const directionClass = i18n.language === 'fr' ? styles.rtl : '';
  return ( 
    <div  className={`${styles.title} ${directionClass}`}>
      <h2>{title}</h2>
      <svg width="239" height="32" viewBox="0 0 239 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.93237 25.9609C2.91986 27.3348 1.44894 28.7701 0.588762 30.2682C0.519127 28.6956 2.05444 27.2658 4.93237 25.9609C38.7948 2.84426 225.989 -2.87097 237.104 2.77822C256.278 12.5227 38.6206 10.686 4.93237 25.9609Z" fill="#9BD249"/>
        <path d="M0.588762 30.2682C15.9224 3.56374 225.328 -3.20671 237.104 2.77822C257.916 13.3551 -0.296004 10.2877 0.588762 30.2682Z" stroke="#9BD249"/>
      </svg>
    </div>
  );
}
 
export default Title
