/** @jsxImportSource @emotion/react */

import Square from "../Square";
import { BoardStyle } from "./style.index";

const ROW = 3;
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
