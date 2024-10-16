import styles from "./Quiz.module.css";
import { useState } from "react";
import QuizProgressSidebar from "./QuizProgressSideBar";

export default function QuizBody({ axes }) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [score, setScore] = useState(null); // To store the score when calculated

  const totalQuestions = axes.reduce((total, axis) => total + axis.questions.length, 0);

  const handleAnswer = (questionIndex, isCorrect) => {
    if (answeredQuestions.has(questionIndex)) return;

    const updatedProgress = Number(currentProgress) + (100 / totalQuestions);
    setCurrentProgress(updatedProgress);
    setAnsweredQuestions(new Set(answeredQuestions).add(questionIndex));

    // If the question is answered correctly, update the score
    if (isCorrect) {
      setScore((prevScore) => (prevScore || 0) + 1);
    }
  };

  const calculateScore = () => {
    if (answeredQuestions.size !== totalQuestions) {
      alert("يرجى الإجابة على جميع الأسئلة قبل الحصول على النتيجة."); // Message to answer all questions
      return;
    }
    alert(`نتيجتك هي: ${score}/${totalQuestions}`); // Show the score in an alert
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizBody}>
        {axes.map((axis, axisIndex) => (
          <div key={axisIndex} className={styles.axis}>
            <h3>{axis.title}</h3>
            {axis.questions.map((question, questionIndex) => (
              <div key={questionIndex} className={styles.quizQuestion}>
                <h4>{question.title}</h4>
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className={styles.input_area}>
                    <input
                      type="radio"
                      id={`q${axisIndex}-q${questionIndex}-opt${optIndex}`}
                      name={`question${axisIndex}-${questionIndex}`}
                      onClick={() => handleAnswer(`${axisIndex}-${questionIndex}`, option.isCorrect)} // Pass the correctness of the option
                    />
                    <label htmlFor={`q${axisIndex}-q${questionIndex}-opt${optIndex}`}>
                      {option.text}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <button onClick={calculateScore} className={styles.scoreButton} disabled={answeredQuestions.size !== totalQuestions}>
          الحصول على النتيجة
        </button>
      </div>
      <QuizProgressSidebar 
        progress={currentProgress} 
        answeredQuestions={answeredQuestions.size} 
        totalQuestions={totalQuestions} 
      />  
    </div>
  );
}
