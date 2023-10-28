import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({
  title,
  targetTime,
}: {
  title: string;
  targetTime: number;
}) {
  // let timer를 사용하면 다른 컴포넌트가 변경될때 저장된 값을 변경시키기때문에
  // 반드시 여러 컴포넌트를 변수에 제어할때는 useRef를 사용하도록 하자.
  // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836346#announcements

  const timer = useRef<number>();

  const dialog = useRef<HTMLDialogElement | null>(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current?.showModal();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current?.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result="lost"
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
