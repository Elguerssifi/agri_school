import Progress from "./Progress"
import styles from "./StudyVideos.module.css"
export default function Header({title , progress}) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h3>احصل على شهادة معترف بها في <span>{title}</span></h3>
      </div>
      <div className={styles.info_hours_watch}>
        <div className={styles.hours}>
            <div className={styles.icon}>
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5247 18.3808C20.232 18.6166 20.9965 18.2343 21.2323 17.527C21.4681 16.8197 21.0858 16.0551 20.3785 15.8194L19.5247 18.3808ZM15.9016 15.7501H14.5516C14.5516 16.3312 14.9234 16.8471 15.4747 17.0308L15.9016 15.7501ZM17.2516 10.1051C17.2516 9.35956 16.6471 8.75514 15.9016 8.75514C15.156 8.75514 14.5516 9.35956 14.5516 10.1051H17.2516ZM20.3785 15.8194L16.3285 14.4694L15.4747 17.0308L19.5247 18.3808L20.3785 15.8194ZM17.2516 15.7501V10.1051H14.5516V15.7501H17.2516ZM25.3516 14.4001C25.3516 19.6192 21.1207 23.8501 15.9016 23.8501V26.5501C22.6118 26.5501 28.0516 21.1104 28.0516 14.4001H25.3516ZM15.9016 23.8501C10.6825 23.8501 6.45156 19.6192 6.45156 14.4001H3.75156C3.75156 21.1104 9.1913 26.5501 15.9016 26.5501V23.8501ZM6.45156 14.4001C6.45156 9.18101 10.6825 4.9501 15.9016 4.9501V2.2501C9.1913 2.2501 3.75156 7.68984 3.75156 14.4001H6.45156ZM15.9016 4.9501C21.1207 4.9501 25.3516 9.18101 25.3516 14.4001H28.0516C28.0516 7.68984 22.6118 2.2501 15.9016 2.2501V4.9501Z" fill="#918E8E"/>
              </svg>
            </div>
            <span className={styles.content}>
              10 ساعات
            </span>
        </div>
        <div className={styles.watch}>
            <div className={styles.icon}>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4781 14.4354C17.4781 15.9832 16.1887 17.2379 14.5981 17.2379C13.0075 17.2379 11.7181 15.9832 11.7181 14.4354C11.7181 12.8877 13.0075 11.633 14.5981 11.633C16.1887 11.633 17.4781 12.8877 17.4781 14.4354Z" stroke="#918E8E" stroke-width="2.7"/>
              </svg>
            </div>
            <span className={styles.content}>
              4,120 مشاهدة
            </span>
        </div>
      </div>
      <Progress progress={progress}/>
    </div>
  )
}
