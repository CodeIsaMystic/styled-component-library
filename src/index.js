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
        <div className="buttons-container">
          <h3>Buttons Variants</h3>
          <PrimaryButton>Primary</PrimaryButton>
          <SecondaryButton>Secondary</SecondaryButton>
          <TertiaryButton>Tertiary</TertiaryButton>
        </div>
    
        <div className="buttons-container">
          <h3>Buttons Modifiers</h3>
          <PrimaryButton modifiers={"small"}>Small</PrimaryButton>
          <PrimaryButton modifiers={"large"}>Large Button</PrimaryButton>
        </div>
    
        <div className="buttons-container">
          <h3>Buttons Modifiers</h3>
          <PrimaryButton modifiers={"success"}>Sucess Button</PrimaryButton>
          <PrimaryButton modifiers={"warning"}>Warning Button</PrimaryButton>
          <PrimaryButton modifiers={"error"}>Error Button</PrimaryButton>
        </div>
      
      </div>
  
      <GlobalStyle />
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));