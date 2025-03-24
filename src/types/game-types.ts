import type { CSSProperties, ReactNode } from "react";

export interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare: boolean;
  highlight: CSSProperties | null;
  isInvalidClick: boolean;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

export interface WinInfo {
  winner: string;
  line: number[];
}

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
}
