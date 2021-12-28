import React from "react";
import "./LoaderStyles.css";
import logo from "../../resources/images/boberLogo.png";

const Loader = (loadState) => {
  return (
    <>
      {loadState && <div id="preloader">
        <img src={logo} id="loaderLogo" />
        <div id="loader"></div>
      </div>}
    </>
  );
};

export default Loader;
