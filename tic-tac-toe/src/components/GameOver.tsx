interface GameOverType {
  winner: string | undefined;
  onRestart: () => void;
}

export default function GameOver({ winner, onRestart }: GameOverType) {
  console.log(winner);
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's Draw!</p>}
      {/* {winner && <p>{winner} won!</p>}
      {!winner && <p>Its Draw!</p>} */}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
