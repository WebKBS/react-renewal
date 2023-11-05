import { useState } from "react";
import QUESTIONS from "../questions";
import quizeCompleteImg from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState<string[][]>([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer: string) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, [selectedAnswer]];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizeCompleteImg} alt="Tropy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // 이 로직은 quizIsComplete 이후에 실행 되어야한다.
  const shuffedAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  // 랜덤으로 섞기 위한 함수
  shuffedAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffedAnswers.map((answer) => {
          return (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Quiz;
