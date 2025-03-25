import type React from "react";
import type { WinInfo } from "@/types/game-types";

export function calculateWinner(squares: (string | null)[]): WinInfo | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a] as string,
        line: [a, b, c],
      };
    }
  }

  return null;
}

export function getLineStyle(
  index: number,
  winningLine: number[]
): React.CSSProperties | null {
  if (!winningLine.includes(index)) return null;

  const [a, b, c] = winningLine;

  if (Math.floor(a / 3) === Math.floor(b / 3)) {
    return { height: "4px", width: "100%", top: "50%", left: "0" };
  } else if (a % 3 === b % 3) {
    return { width: "4px", height: "100%", left: "50%", top: "0" };
  } else if (a === 0 && c === 8) {
    return {
      height: "4px",
      width: "140%",
      top: "50%",
      left: "-20%",
      transform: "rotate(45deg)",
    };
  } else if (a === 2 && c === 6) {
    return {
      height: "4px",
      width: "140%",
      top: "50%",
      left: "-20%",
      transform: "rotate(-45deg)",
    };
  }

  return null;
}
