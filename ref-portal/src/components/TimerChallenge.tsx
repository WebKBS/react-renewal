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

  const dialog = useRef<HTMLDialogElement | null>();

  const [timerStarted, setTimearStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current?.showModal();
    }, targetTime * 1000);
    setTimearStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerExpired(false);
    setTimearStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
