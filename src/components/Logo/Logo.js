import React from "react";

import logo from "./logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        width: "75px",
        height: "auto",
        margin: "20px 50px 20px 0",
      }}
    />
  );
};

export default Logo;
