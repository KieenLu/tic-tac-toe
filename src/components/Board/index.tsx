/** @jsxImportSource @emotion/react */

import { ROW } from "@/constants/variable";
import Square from "../Square";
import { BoardStyle } from "./style.index";

const emptyGrid = new Array(ROW ** 2).fill(null);

type Props = {
  squares: Array<string>;
  onClick: (i: number) => void;
};

const Board = ({ squares, onClick }: Props) => {
  return (
    <div css={BoardStyle.wrapper}>
      {emptyGrid.map((_, index) => (
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
