import { media } from "@/styles/breakpoints";
import { css } from "@emotion/react";
import { SQUARE_SIZE } from "../constants/variable";

export const SquareStyle = {
  wrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${SQUARE_SIZE}px;
    height: ${SQUARE_SIZE}px;
    border: 1px solid black;

    font-size: 68px;

    ${media.md} {
      width: ${SQUARE_SIZE / 2}px;
      height: ${SQUARE_SIZE / 2}px;

      font-size: 34px;
    }

    &:hover {
      cursor: pointer;
    }
  `,
};
