import styled, { css } from 'styled-components';

import pxToRem from 'utils/typography/pxToRem';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button<{ variant?: 'text' | 'contained' | 'outlined' }>`
  position: relative;
  font-size: ${({ theme: { typography } }) => typography.fontFamily.libreFranklin};
  font-weight: 500;
  line-height: ${pxToRem(24)};
  padding: ${pxToRem(22)};
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.palette.primary};
  transition: 100ms transform ease-in-out;

  ${({ theme, variant }) => {
    if (variant === 'outlined') {
      return css`
        border: ${pxToRem(1)} solid ${theme.colors.palette.primary};
      `;
    }

    if (variant === 'text') {
      return null;
    }

    if (variant === 'contained') {
      return null;
    }

    return null;
  }}
  &:hover {
    &::after {
      opacity: 0.2;
    }
  }

  &:active {
    &::after {
      opacity: 0.5;
    }

    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.palette.primary};
    opacity: 0;
    transition: 100ms opacity ease-in;
    z-index: 1;
  }
`;
