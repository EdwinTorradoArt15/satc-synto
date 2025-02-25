import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Backtotop from "../../layout/layoutsection/backtotop/backtotop";
import { Sidebar, Navbar, Footer } from "@/components";
import Switcher from "../../layout/layoutsection/switcher/switcher";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { useState } from "react";

const App = () => {
  let [MyclassName, setMyClass] = useState("");

  const Bodyclickk = () => {
    let html = document.querySelector("html");
    html?.setAttribute("data-toggled", "close");
    if (localStorage.getItem("Syntoverticalstyles") === "icontext") {
      setMyClass("");
    }
  };
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang: "en",
          "data-menu-styles": "dark",
          dir: "ltr",
          class: "light",
          "data-nav-layout": "vertical",
          "data-header-styles": "light",
          "data-vertical-style": "overlay",
          "icon-text": MyclassName,
        }}
      />
      <Provider store={store}>
        <Switcher />
        <div className="page">
          <Sidebar />
          <Navbar />
          <div className="content">
            <div className="main-content" onClick={Bodyclickk}>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
        <Backtotop />
        <div id="responsive-overlay"></div>
      </Provider>
    </Fragment>
  );
};

export default App;
