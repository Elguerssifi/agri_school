import styles from "./course.module.css";
import { useState, useRef, useEffect } from "react";

export default function Header({
  title_course,
  price,
  old_price,
  videoSrc,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.row}>
        <div className={styles.about_course}>
          <div className={styles.title}>
            <h3>
              احصل على شهادة معترف بها في <br />
              <span>تقنيات {title_course} </span>
            </h3>
          </div>
          <div className={styles.description}>
            <p>
              بغيت تولي <span>محترف ف{title_course}</span> Agrischool Academy كتوفر ليك أول دورة فهاذ المجال، معتمدة على تقنيات حديثة ومناسبة للواقع الفلاحي فالمغرب وإفريقيا. تقدر تستافد من هاد الدورة فالوَقت والمكان اللي كيناسبك، بلا ما تضطر تبدل مواعيدك أو تلتزم بجدول محدد. ما تضيعش الفرصة وتعلم كيفاش <span>تصمم أنظمة الري اللي غادي تساعدك تطور مشروعك الفلاحي!</span>
            </p>
          </div>
        </div>
        <div className={styles.subscribe_course}>
          <div className={styles.video_container}>
            <video
              className={styles.video}
              src="/Assets/videos/video_1.mp4"
              ref={videoRef}
              controls
              controlsList="nodownload"
              disablePictureInPicture
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className={styles.play_button} onClick={handlePlayButtonClick}>
                <img src="/Assets/images/video_icon.png" alt="Play button" />
              </div>
            )}
          </div>
          <div className={styles.students}>
            <div className={styles.students_images}>

            </div>
            <span className={styles.students_counter}>
            + 30 مشا رك
            </span>
          </div>
          <div className={styles.course_price}>
            <span className={styles.new_price}>
              {price} MAD 
            </span>
            <span className={styles.old_price}>
              {old_price} MAD
            </span>
          </div>
          <div className={styles.subscribe_this_course}>
            <button className={styles.subscribe_button}>
              اشترك الآن  
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
