import type { SquareProps } from "../types/game-types";

export function Square({
  value,
  onSquareClick,
  isWinningSquare,
  highlight,
  isInvalidClick,
}: SquareProps) {
  return (
    <button
      className={`h-20 w-20 border border-gray-200 bg-white text-4xl font-bold flex items-center justify-center transition-all duration-300 
        ${
          value === "X"
            ? "text-orange-500"
            : value === "O"
            ? "text-blue-500"
            : ""
        }
        ${isWinningSquare ? "bg-green-100" : ""}
        ${
          isInvalidClick
            ? "bg-red-200"
            : isWinningSquare
            ? ""
            : "hover:bg-gray-100 hover:scale-105"
        }
        relative rounded-md
      `}
      onClick={onSquareClick}
    >
      {value}
      {highlight && (
        <div
          className="absolute bg-green-500 opacity-70 z-10"
          style={highlight}
        ></div>
      )}
    </button>
  );
}
