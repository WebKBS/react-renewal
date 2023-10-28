import { ChangeEvent, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmited] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSubmited(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmited(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
