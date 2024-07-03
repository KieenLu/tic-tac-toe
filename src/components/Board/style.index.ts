import { css } from "@emotion/react";

export const BoardStyle = {
  wrapper: css`
    display: flex;
    justify-content: center;
    width: ${3 * (100 + 5)}px;
    flex-flow: wrap;
    position: relative;

    .board-row {
      border-top: 1px solid black;
      border-bottom: 1px solid black;

      &:first-of-type {
        border-left: 1px solid black;
      }
      &:last-of-type {
        border-right: 1px solid black;
      }
    }
  `,
};
