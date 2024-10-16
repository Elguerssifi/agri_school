import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate if using React Router
import styles from "./Coures.module.css";

export default function ItemCourse({
  title_course = "أنظمة الطاقة الشمسية",
  hours_watch = "10 ساعات",
  views = "4,120 مشاهدة",
  price = "5,000 MAD",
  old_price = "6,000 MAD",
  imageSrc = "./Assets/images/image_course_1.png", // Dynamic image source
  videoSrc = "./Assets/videos/video_1.mp4", // Add a new prop for the video source
  link = "/", // Dynamic link for redirection
}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // For redirection

  const handleRedirect = () => {
    navigate(link); // Navigate to the course page
  };

  return (
    <div className={styles.item_container}>
      <div 
        className={styles.image_item}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageSrc} alt={title_course} />
        {isHovered && (
          <div className={styles.video_overlay}>
            <video src={videoSrc} autoPlay loop className={styles.video} />
          </div>
        )}
      </div>
      <div className={styles.description_item}>
        <div className={styles.title_watch_time}>
          <h4>{title_course}</h4>
          <div className={styles.watch_time}>
            <div className={styles.hours}>
              {/* SVG Icon */}
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8461 10.2115C11.239 10.3425 11.6638 10.1301 11.7948 9.73717C11.9258 9.34421 11.7134 8.91947 11.3204 8.78849L10.8461 10.2115ZM8.83325 8.75H8.08325C8.08325 9.07282 8.28982 9.35943 8.59608 9.46151L8.83325 8.75ZM9.58325 5.61391C9.58325 5.1997 9.24747 4.86391 8.83325 4.86391C8.41904 4.86391 8.08325 5.1997 8.08325 5.61391H9.58325ZM11.3204 8.78849L9.07042 8.03849L8.59608 9.46151L10.8461 10.2115L11.3204 8.78849ZM9.58325 8.75V5.61391H8.08325V8.75H9.58325ZM14.0833 8C14.0833 10.8995 11.7327 13.25 8.83325 13.25V14.75C12.5612 14.75 15.5833 11.7279 15.5833 8H14.0833ZM8.83325 13.25C5.93376 13.25 3.58325 10.8995 3.58325 8H2.08325C2.08325 11.7279 5.10533 14.75 8.83325 14.75V13.25ZM3.58325 8C3.58325 5.1005 5.93376 2.75 8.83325 2.75V1.25C5.10533 1.25 2.08325 4.27208 2.08325 8H3.58325ZM8.83325 2.75C11.7327 2.75 14.0833 5.1005 14.0833 8H15.5833C15.5833 4.27208 12.5612 1.25 8.83325 1.25V2.75Z" fill="#918E8E"/>
              </svg>
              <p>{hours_watch}</p>
            </div>
            <div className={styles.views}>
              {/* SVG Icon */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.6001 6.01946C9.6001 6.87931 8.88375 7.57636 8.0001 7.57636C7.11644 7.57636 6.4001 6.87931 6.4001 6.01946C6.4001 5.15961 7.11644 4.46256 8.0001 4.46256C8.88375 4.46256 9.6001 5.15961 9.6001 6.01946Z" stroke="#918E8E" strokeWidth="1.5"/>
              </svg>
              <p>{views}</p>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <h4>{price} MAD</h4>
          <span>{old_price} MAD</span>
        </div>
      </div>
      <div className={styles.subscribe}>
        <button onClick={handleRedirect}>اشترك الآن</button>
        <div className={styles.like_icon}>
          {/* SVG Icon */}
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.8065 3.2921C3.70663 2.40555 4.92731 1.90751 6.2001 1.90751C7.47288 1.90751 8.69356 2.40555 9.5937 3.2921L11.0001 4.67652L12.4065 3.2921C12.8493 2.84043 13.3789 2.48017 13.9646 2.23232C14.5502 1.98448 15.18 1.85402 15.8174 1.84857C16.4547 1.84311 17.0868 1.96276 17.6767 2.20054C18.2666 2.43832 18.8025 2.78947 19.2532 3.23349C19.7039 3.67751 20.0603 4.20551 20.3016 4.78669C20.543 5.36787 20.6644 5.99059 20.6589 6.6185C20.6534 7.24642 20.5209 7.86696 20.2694 8.44392C20.0178 9.02088 19.6521 9.5427 19.1937 9.97894L11.0001 18.0526L2.8065 9.97894C1.90664 9.09212 1.40112 7.88949 1.40112 6.63552C1.40112 5.38155 1.90664 4.17892 2.8065 3.2921V3.2921Z" stroke="#22262F" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
