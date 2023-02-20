import styled, { css } from 'styled-components';

import pxToRem from 'utils/typography/pxToRem';
import { TypesStyled } from './types';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button<TypesStyled>`
  position: relative;
  font-family: ${({ theme: { typography } }) => typography.fontFamily.libreFranklin};
  font-weight: 500;
  line-height: ${pxToRem(24)};
  padding: ${pxToRem(22)};
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: inherit;
  color: ${({ theme: { colors } }) => colors.palette.primary};
  transition: 100ms transform ease-in-out;

  ${({ theme, variant }) => {
    if (variant === 'outlined') {
      return css`
        border: ${pxToRem(1)} solid ${theme.colors.palette.primary};
      `;
    }

    if (variant === 'blur') {
      return css`
        backdrop-filter: blur(15px);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${theme.colors.palette.dark[50]};
          opacity: 0.4;
          z-index: -1;
        }
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

  ${({ theme: { animations } }) => animations.button}
`;
