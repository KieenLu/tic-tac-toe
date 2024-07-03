import { SQUARE_SIZE } from "@/constants/variable";
import { media } from "@/styles/breakpoints";
import { css } from "@emotion/react";

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
