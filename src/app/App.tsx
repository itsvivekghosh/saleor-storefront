import "../globalStyles/scss/index.scss";

import React from "react";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <>
      <MetaConsumer />
      <header>
        <MainMenu />
      </header>
      <div style={{ marginTop: "3.55rem" }}>
        <Routes />
        <Footer />
        <OverlayManager />
      </div>
    </>
  );
};

export default App;
