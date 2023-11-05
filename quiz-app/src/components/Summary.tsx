import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ userAnswer }: { userAnswer: string[] }) {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswer = userAnswer.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswer.length / userAnswer.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Tropy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer: string, index: number) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
