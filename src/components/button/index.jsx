import React, { useState } from 'react';
import { css, styled } from 'styled-components';

export const ButtonCore = ({ children, ...props }) => {
  return <StyledButtonCore {...props}>{children}</StyledButtonCore>;
};

const StyledButtonCore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  ${({ theme }) => {
    switch (theme) {
      case 'rectangle':
        return css`
          width: 100px;
          height: 40px;
          font-size: 15px;
          color: #b82aff;
          background-color: #fff9fe;
        `;

      default:
        break;
    }
  }}
`;
