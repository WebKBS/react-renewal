import { useState } from "react";
import QUESTIONS from "../questions";

// interface QuestionType {
//   id: string;
//   text: string;
//   answers: string[];
// }

function Quiz() {
  const [userAnswers, setUserAnswers] = useState<string[][]>([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer: string) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, [selectedAnswer]];
    });
  }

  return (
    <div id="quiz">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
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
