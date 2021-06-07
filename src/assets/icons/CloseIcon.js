import React from 'react';
import styled from 'styled-components';


const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;


export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
      <g transform="translate(0,-1028.3622)">
        <path d="M 1.4966617,1050.8532 22.503338,1029.8465" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1" strokeMiterlimit="4" strokeDasharray="none"/>
        <path d="M 22.503338,1050.8532 1.4966617,1029.8465" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1" strokeMiterlimit="4" strokeDasharray="none"/>
      </g>
  </CloseIconWrapper>
)
