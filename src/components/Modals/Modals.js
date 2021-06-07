import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

import { typeScale } from '../../utils';
import { Illustrations, CloseIcon } from '../../assets';

import { PrimaryButton } from '../Buttons/Buttons';


const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBg}; 
  color: ${props => props.theme.textOnFormElementBg}; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraphs};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.default
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img 
          src={Illustrations.SignUp} 
          alt="Sign up modal" 
          aria-hidden="true"
          style={{
            width: "90%",
            height: "45%"

          }} />
        <SignUpHeader>Sign Up!</SignUpHeader>
        <SignUpText>Sign up today to get access!</SignUpText>
        <PrimaryButton>Sign Up</PrimaryButton>
        <CloseModalButton aria-label="Close Modal">
          <CloseIcon/>
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
}