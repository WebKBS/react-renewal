export default function TimerChallenge({
  title,
  targetTime,
}: {
  title: string;
  targetTime: number;
}) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Button</button>
      </p>
      <p className="active">Time is Running...</p>
    </section>
  );
}
