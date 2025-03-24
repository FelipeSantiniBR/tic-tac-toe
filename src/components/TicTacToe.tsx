"use client";

import { Board } from "@/components/Board";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fireworks } from "@/utils/effects";
import { calculateWinner } from "@/utils/game-utils";
import { useState, useEffect } from "react";

export default function TicTacToe() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [hasWinner, setHasWinner] = useState(false);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const winInfo = calculateWinner(currentSquares);

  useEffect(() => {
    if (winInfo && !hasWinner) {
      setHasWinner(true);
      fireworks();
    }
  }, [winInfo, hasWinner]);

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setHasWinner(false);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Jogo da Velha</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <Button
            onClick={resetGame}
            className="mt-8"
            variant="default"
            size="lg"
          >
            Reiniciar Jogo
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
