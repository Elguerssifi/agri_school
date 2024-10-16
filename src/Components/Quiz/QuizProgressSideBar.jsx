import styles from "./Quiz.module.css";

export default function QuizProgressSidebar({ progress, answeredQuestions, totalQuestions }) {
  return (
    <div className={styles.sidebar}>
      <h4>تقدم الاختبار</h4>
      <p>
        لقد أكملت {answeredQuestions} من أصل {totalQuestions} أسئلة. 
      </p>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>
      <div>({answeredQuestions}/{totalQuestions})</div>
    </div>
  );
}
