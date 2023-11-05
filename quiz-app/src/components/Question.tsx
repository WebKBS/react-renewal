import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTION from "../questions";

function Question({
  index,
  onSelectAnswer,
  onSkipAnswer,
}: {
  key: number;
  index: number;
  onSelectAnswer: (selectedAnswer: string) => void;
  onSkipAnswer: () => void;
}) {
  const [answer, setAnswer] = useState<{
    selectedAnswer: string;
    isCorrect: null | boolean;
  }>({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer: string) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  // 선택한 답이 맞거나? 아니거나 일때 색상 제어하기
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTION[index].text}</h2>
      <Answers
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
