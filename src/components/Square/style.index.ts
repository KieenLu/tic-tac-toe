import { media } from "@/styles/breakpoints";
import { css } from "@emotion/react";

export const SquareStyle = {
  wrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid black;

    font-size: 68px;

    ${media.md} {
      width: 50px;
      height: 50px;

      font-size: 34px;
    }

    &:hover {
      cursor: pointer;
    }
  `,
};
