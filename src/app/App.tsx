import "../globalStyles/scss/index.scss";

import React from "react";
import { RouteComponentProps } from "react-router";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { isPath } from "../core/utils";
import { orderConfirmationUrl, Routes } from "../routes";

const App: React.FC<RouteComponentProps> = ({
  history: {
    location: { pathname },
  },
}) => {
  const orderConfirmationPage = isPath(pathname, orderConfirmationUrl);

  return (
    <>
      <MetaConsumer />
      <header>
        <MainMenu />
      </header>
      <div style={{ marginTop: "3.55rem" }}>
        <Routes />
        {!orderConfirmationPage && <Footer />}
        <OverlayManager />
      </div>
    </>
  );
};

export default App;
