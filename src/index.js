import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

import Header from './components/Header/Header';
import {
  PrimaryButton, 
  SecondaryButton, 
  TertiaryButton,
  SignUpModal } from './components';




const App = () => {
  const [ useTheme, setUseTheme ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);

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
        <button onClick={() => setShowModal(!showModal)}>
          Toggle the modal
        </button>
      </div>
      
      <div 
        className="container"
        style={{
          background: useTheme ? darkTheme.bgColorDark : defaultTheme.bgColor ,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
        <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
      </div>

  
      <GlobalStyle />
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));