import { css } from "@emotion/react";

export const TicTacToeStyle = {
  wrapper: css`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  `,

  status: css`
    margin-bottom: 15px;
    height: 50px;
    button {
      padding: 5px 10px;
      font-size: 22px;
    }

    p {
      font-weight: bold;
      line-height: 50px;

      font-size: 30px;
    }
  `,
};
