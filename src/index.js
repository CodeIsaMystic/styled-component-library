import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header'
import {
  PrimaryButton, 
  SecondaryButton, 
  TertiaryButton} from './components/Buttons/Buttons';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';




const App = () => {
  const [ useTheme, setUseTheme ] = useState(false);

  return (
    <ThemeProvider theme={useTheme ? defaultTheme : darkTheme}>

      <Header />

      <div className="theme-container">
        <button onClick={() => setUseTheme(false)}>
          Default Theme
        </button>
        <button onClick={() => setUseTheme(true)}>
          Dark Theme
        </button>
      </div>
  
      <div 
        className="container"
        style={{
          background: useTheme ? darkTheme.bgColorDark : defaultTheme.bgColor 
        }}>
    
        <div className="modal-wrapper">
          ...
        </div>
      
      </div>
  
      <GlobalStyle />
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));