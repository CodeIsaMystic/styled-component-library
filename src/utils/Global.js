import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';
import { neutral } from './colors';
import { normalize } from 'polished';


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
    width: 100%;
  }

  .container {
    width: 90% auto;
    margin: 0 auto;
    padding-top: 80px;
  }
  .buttons-container {
    width: 85%;
    margin: 40px auto 0;
    text-align: left;
  }
  .theme-container {
    margin: 0 auto;
    padding: 16px 0;
    border-top: 1px solid ${neutral[300]};
    border-bottom: 1px solid ${neutral[300]};
  }
   
  h1 { 
    max-width: 450px;
    text-align: center; 
    margin: 20px auto 80px;
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
