import { Global } from "@emotion/react";

import { cssReset } from "./reset";

const GlobalStyles = () => {
  return <Global styles={[cssReset]} />;
};

export default GlobalStyles;
