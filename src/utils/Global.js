import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { neutral } from "./colors";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  * , *:before,  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
    max-width: 100%;
  }

  .theme-container {
    margin: 0 auto;
    padding: 16px 0;
    border-top: 1px solid ${neutral[300]};
    border-bottom: 1px solid ${neutral[300]};
    position: relative;
    background-color: #fff;
  }
   
  h1 { 
    max-width: 450px;
    text-align: center; 
    margin: 0 auto 0;
  }

  h3 { 
    margin: 20px auto;
  }

  button {
    margin: 8px 16px;
    padding: 8px;
    background: none;
  }
`;
