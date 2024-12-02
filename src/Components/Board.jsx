import React, { useState, useEffect, useRef } from "react";
import Cells from "./Cell";
import ScoreTable from "./ScoreTable";

function Board() {
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [isXNext, setIsXNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const resetButtonRef = useRef(null);

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("scores"));
    if (savedScores) {
      setScore(savedScores);
    }
  }, []);

  useEffect(() => {
    const winner = winningStatus();
    if (winner) {
      setWinner(winner);
      setIsGameOver(true);
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
      }, 1000);
    }
  }, [board]);

  const handleClick = (index) => {
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsGameOver(false);
    setScore({ X: 0, O: 0 });
  };

  const winningStatus = () => {
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

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        const winner = board[a];
        setScore((prevScore) => {
          const newScore = { ...prevScore, [winner]: prevScore[winner] + 1 };
          localStorage.setItem("scores", JSON.stringify(newScore));
          return newScore;
        });
        return winner;
      }
    }
    return null;
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="mb-2 font-mono text-5xl font-bold text-white">
        <h1>Tic Tac Toe</h1>
      </div>

      <div className="flex justify-center w-full mb-5">
        <ScoreTable score={score} />
      </div>

      <div className="mb-5 text-2xl font-semibold text-white">
        <h3>{status}</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8 w-80">
        {board.map((cell, index) => (
          <Cells key={index} value={cell} onClick={() => handleClick(index)} />
        ))}
      </div>

      <button
        ref={resetButtonRef}
        onClick={resetGame}
        className="px-6 py-3 text-lg font-bold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 hover:bg-pink-700"
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;
