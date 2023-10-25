import { useState } from "react";

interface GameBoardProps {
  onSelectSquare: () => void;
  activePlayerSymbol: string;
}

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  onSelectSquare,
  activePlayerSymbol,
}: GameBoardProps) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameBoard((prevGameBoard) => {
      // 상태가 변경될때 마다 원본 배열을 복사해서 새로 할당한다.
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      console.log(updatedBoard);

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>
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
