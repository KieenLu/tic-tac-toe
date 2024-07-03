/** @jsxImportSource @emotion/react */

import { SquareStyle } from "./style.index";

interface Props {
  value: string;
  onClick: () => void;
}
const Square = ({ onClick, value }: Props) => {
  return (
    <button css={SquareStyle.wrapper} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
