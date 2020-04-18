import "../globalStyles/scss/index.scss";

import React, { useRef } from "react";
import { RouteComponentProps } from "react-router";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { isPath } from "../core/utils";
import { orderConfirmationUrl, Routes } from "../routes";

const App: React.FC<RouteComponentProps> = ({
  history: {
    location: { pathname },
  },
}) => {
  // useEffect(() => {
  //   return () => {
  //     window.addEventListener("scroll", () => handleScroll);
  //   };
  // }, []);

  // const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  // const handleScroll = () => {
  //   // tslint:disable-next-line:no-console
  //   console.log(stickyRef && stickyRef.current && stickyRef.current.getBoundingClientRect())
  //   window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
  //     ? setSticky(true)
  //     : setSticky(false);
  // };
  // // handleScroll();

  // // setSticky(true);

  const orderConfirmationPage = isPath(pathname, orderConfirmationUrl);

  return (
    <>
      <MetaConsumer />
      <header>
        <MainMenu isSticky={true} />
      </header>
      <div ref={stickyRef} style={{ marginTop: "3.55rem" }}>
        <Routes />
        {!orderConfirmationPage && <Footer />}
        <OverlayManager />
      </div>
    </>
  );
};

export default App;
