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
        margin: "20px 0 0 50px"}} />
  )
}

export default Logo;