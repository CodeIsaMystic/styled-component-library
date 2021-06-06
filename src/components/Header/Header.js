import React from "react";
import Logo from "../Logo/Logo";


const Header = () => {
  return (
    <div>
        
      <div style={{ display: "flex", justifyContent: "flexStart"}}>
        <Logo />
      </div>
      
      <h1> 
        Implementing Styled Components using Design System in a React App
      </h1>

    </div>
  )
};

export default Header;