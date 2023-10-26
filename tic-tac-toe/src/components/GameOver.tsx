export default function GameOver({ winner }: { winner: string | undefined }) {
  console.log(winner);
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's Draw!</p>}
      {/* {winner && <p>{winner} won!</p>}
      {!winner && <p>Its Draw!</p>} */}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
