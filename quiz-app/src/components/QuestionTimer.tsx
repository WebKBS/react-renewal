import { useEffect, useState } from "react";

function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}: {
  timeout: number;
  onTimeout: (() => void) | null;
  mode: string;
}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    if (onTimeout !== null) {
      const timer = setTimeout(onTimeout, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

export default QuestionTimer;
