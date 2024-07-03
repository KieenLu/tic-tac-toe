/** @jsxImportSource @emotion/react */

import { EMPTY_GRID } from "@/constants/variable";
import Square from "../Square";
import { BoardStyle } from "./style.index";

type Props = {
  squares: Array<string>;
  onClick: (i: number) => void;
};

const Board = ({ squares, onClick }: Props) => {
  return (
    <div css={BoardStyle.wrapper}>
      {EMPTY_GRID.map((_, index) => (
        <Square
          key={index}
          value={squares[index]}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
