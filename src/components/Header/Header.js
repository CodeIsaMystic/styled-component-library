import React from "react";
import Logo from "../Logo/Logo";


const Header = () => {
  return (
    <div>
        
      <div style={{ display: "flex", justifyContent: "flexStart"}}>
        <Logo />
      </div>
      
      <h1> 
        Implementing Animated Modals with Styled Components, useSpring and useTransition in React
      </h1>

    </div>
  )
};

export default Header;