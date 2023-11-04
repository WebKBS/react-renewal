import { useEffect, useState } from "react";

function ProgressBar({ timer }: { timer: number }) {
  const [remaingTime, setRemaingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer");
      setRemaingTime((prevTime: number) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remaingTime} max={timer} />;
}

export default ProgressBar;
