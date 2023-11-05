import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizeCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer: string) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        const updatedAnswers: string[] = [...prevUserAnswers, selectedAnswer];
        return updatedAnswers;
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer("");
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizeCompleteImg} alt="Tropy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // 이 로직은 quizIsComplete 이후에 실행 되어야한다.

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
