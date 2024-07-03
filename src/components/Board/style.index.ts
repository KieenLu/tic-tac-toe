import { BOARD_SIZE } from "@/constants/variable";
import { css } from "@emotion/react";

export const BoardStyle = {
  wrapper: css`
    display: grid;
    grid-template-columns: repeat(${BOARD_SIZE}, 1fr);

    border: 1px solid black;
  `,
};
