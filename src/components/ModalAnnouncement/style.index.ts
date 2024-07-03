import { media } from "@/styles/breakpoints";
import { css } from "@emotion/react";

export const ModalAnnouncementStyle = {
  wrapper: () => css`
    position: absolute;
    width: 100vw;
    height: 100vh;
  `,

  mark: css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
  `,

  content: css`
    border-radius: 5px;
    position: absolute;
    overflow: hidden;

    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    box-shadow: 1px 10px 5px 0px rgba(0, 0, 0, 0.45);
    background-color: white;

    top: 20px;
    right: 50%;
    transform: translateX(50%);

    p {
      font-size: 20px;

      ${media.lg} {
        font-size: 18px;
      }

      ${media.md} {
        font-size: 14px;
      }
    }

    button {
      padding: 10px 25px;
      cursor: pointer;
    }
  `,
};
