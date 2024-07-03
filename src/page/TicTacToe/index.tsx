/** @jsxImportSource @emotion/react */

import Board from "@/components/Board";
import ModalAnnouncement from "@/components/ModalAnnouncement";
import { calculateWinner } from "@/utils/calculateWinner";
import { useState } from "react";
import { TicTacToeStyle } from "./style.index";
import { BOARD_SIZE, EMPTY_GRID } from "@/constants/variable";

interface GamesState {
  squares: Array<string>;
  xIsNext: boolean;
  isGameOver: boolean;
  statusMessage: string;
}

function TicTacToe() {
  const [state, setState] = useState<GamesState>({
    squares: EMPTY_GRID,
    xIsNext: true,
    isGameOver: false,
    statusMessage: "",
  });

  const handleClick = (i: number) => {
    if (calculateWinner(state.squares, BOARD_SIZE) || state.squares[i]) return;
    const newSquares = [...state.squares];
    newSquares[i] = state.xIsNext ? "X" : "O";

    const winner = calculateWinner(newSquares, BOARD_SIZE);
    const isDraw = newSquares.every((square) => square !== "");

    setState({
      ...state,
      squares: newSquares,
      xIsNext: !state.xIsNext,
      isGameOver: winner !== null || isDraw,
      statusMessage: winner
        ? `Winner: ${winner}`
        : isDraw
        ? "It's a draw!"
        : "",
    });
  };

  const handleRestart = () => {
    setState({
      squares: EMPTY_GRID,
      xIsNext: true,
      isGameOver: false,
      statusMessage: "",
    });
  };

  return (
    <div css={TicTacToeStyle.wrapper}>
      <div css={TicTacToeStyle.status}>
        {!state.isGameOver && (
          <p>{`Next player: ${state.xIsNext ? "X" : "O"}`}</p>
        )}
      </div>

      <div css={TicTacToeStyle.status}>
        {!state.isGameOver && <button onClick={handleRestart}>Restart</button>}
      </div>

      <Board squares={state.squares} onClick={handleClick} />

      {state.isGameOver && (
        <ModalAnnouncement
          handleRestart={handleRestart}
          status={state.statusMessage}
        />
      )}
    </div>
  );
}

export default TicTacToe;
