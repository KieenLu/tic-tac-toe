/** @jsxImportSource @emotion/react */

import { ModalAnnouncementStyle } from "./style.index";

interface Props {
  handleRestart: () => void;
  status: string;
}

const ModalAnnouncement = ({ handleRestart, status }: Props) => {
  return (
    <div css={ModalAnnouncementStyle.wrapper}>
      <div css={ModalAnnouncementStyle.mark} />
      <div css={ModalAnnouncementStyle.content}>
        <p>{status}</p>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default ModalAnnouncement;
