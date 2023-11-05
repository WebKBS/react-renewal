import { useRef } from "react";

function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: {
  answers: string[];
  selectedAnswer: string;
  answerState: string;
  onSelect: (answer: string) => void;
}) {
  const shuffledAnswers = useRef<string[]>();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    // 랜덤으로 섞기 위한 함수
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
