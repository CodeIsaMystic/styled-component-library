import styled from 'styled-components';
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from '../../utils';

const BUTTON_MODIFIERS = {
  /*  Sizes Variants Buttons  */
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;

  `,
  large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
  `,
  /*  Status Variants Buttons  */
  success: (props) => `
    background-color: ${props.theme.status.successColor};
    border: 1px solid transparent;
  
  
  &:hover {
    background-color: ${props.theme.status.successColorHover};
    border: 1px solid transparent;
  }
  
  &:active, &:focus {
    background-color: ${props.theme.status.successColorActive};
  }
  `,
  warning: (props) => `
    background-color: ${props.theme.status.warningColor};
    border: 1px solid transparent;
    
    &:hover {
      background-color: ${props.theme.status.warningColorHover};
      border: 1px solid transparent;

    }
    
    &:active, &:focus {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  error: (props) => `
    background-color: ${props.theme.status.errorColor};
    border: 1px solid transparent;
    
    &:hover {
      background-color: ${props.theme.status.errorColorHover};
      border: 1px solid transparent;
    }
    
    &:active, &:focus {
      background-color: ${props.theme.status.errorColorActive};
    }
  `
};





/*  Main Styles Buttons  */
const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  margin: 0 20px 20px;
  font-size: ${typeScale.paragraphs};
  font-family: ${props => props.theme.primaryFont};
  border-radius: 50px;
  box-shadow: 0 2px 20px ${props => props.theme.boxShadow1};
  cursor: pointer;
  transition: all 0.2s linear;
`;







/*  Variants Main Buttons  */
export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    border: 1px solid ${props => props.theme.primaryColor};
  }

  &:focus, &:active {
    background-color: ${props => props.theme.primaryColorActive};
  }

  &:disabled {
  background-color: ${props => props.theme.bgColorDisabled};
  color: ${props => props.theme.textColorDisabled};
  border: 1px solid transparent;
  cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;


export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.secondaryColor};
  border: none;
  color: ${props => props.theme.textColor};

  &:hover {
    background-color: ${props => props.theme.secondaryColorHover};
  }

  &:focus, &:active {
    background-color: ${props => props.theme.secondaryColorActive};
  }

  &:disabled {
  background-color: ${props => props.theme.bgColorDisabled};
  color: ${props => props.theme.textColorDisabled};
  border: 1px solid transparent;
  cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;


export const TertiaryButton = styled(Button)`
  background-color: ${props => props.theme.tertiaryColor};
  border: 1px solid transparent;
  color: ${props => props.theme.textColor};

  &:hover {
    background-color: ${props => props.theme.tertiaryColorHover};
    box-shadow: 1px 5px 5px ${props => props.theme.boxShadow2};
    border: 1px solid ${props => props.theme.primaryColor};
  }

  &:focus, &:active {
    background-color: ${props => props.theme.tertiaryColorActive};
    box-shadow: 5px 5px 15px ${props => props.theme.boxShadow1};
    border: 1px solid transparent;
  }

  &:disabled {
  background-color: ${props => props.theme.bgColorDisabled};
  color: ${props => props.theme.textColorDisabled};
  border: 1px solid transparent;
  box-shadow: 0 5px 5px ${props => props.theme.boxShadow1};
  cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
