import { PlayerSymbol } from "../Types/propsType";

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: PlayerSymbol[][];
}

export default function GameBoard({ onSelectSquare, board }: GameBoardProps) {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playerSymbol !== null} // playerSymbol이 null이 아니라면 버튼 클릭을 제어한다.
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
