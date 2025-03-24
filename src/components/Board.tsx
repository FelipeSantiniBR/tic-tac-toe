import { useState } from "react";
import type { BoardProps } from "../types/game-types";
import { calculateWinner, getLineStyle } from "../utils/game-utils";
import { Square } from "@/components/Square";

export function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const [invalidClickIndex, setInvalidClickIndex] = useState<number | null>(
    null
  );

  function handleClick(i: number) {
    const winInfo = calculateWinner(squares);
    if (winInfo || squares[i]) {
      if (squares[i]) {
        setInvalidClickIndex(i);

        setTimeout(() => {
          setInvalidClickIndex(null);
        }, 3000);
      }
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winInfo = calculateWinner(squares);
  let status;

  if (winInfo) {
    status = `Vencedor: ${winInfo.winner}`;
  } else if (squares.every((square) => square)) {
    status = "Empate!";
  } else {
    status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div>
      <div
        className={`mb-6 text-2xl font-semibold ${
          winInfo
            ? winInfo.winner === "X"
              ? "text-orange-500"
              : "text-blue-500"
            : xIsNext
            ? "text-orange-500"
            : "text-blue-500"
        }`}
      >
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2 w-max bg-gray-50 p-4 rounded-lg shadow-md relative">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            isWinningSquare={!!(winInfo && winInfo.line.includes(i))}
            highlight={winInfo && getLineStyle(i, winInfo.line)}
            isInvalidClick={invalidClickIndex === i}
          />
        ))}
      </div>
    </div>
  );
}
