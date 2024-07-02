import { useLocation, useRoutes } from "react-router-dom";
import GlobalStyles from "./styles/global";
import React from "react";
import { routers } from "./routes";

function App() {
  const location = useLocation();
  const element = useRoutes(routers, location);

  return (
    <React.Fragment>
      {element}
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
