import styled, { css } from 'styled-components';

import pxToRem from 'utils/typography/pxToRem';
import { Basket } from './icons';

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const Header = styled.header<{ isHide: boolean; isTransparent: boolean }>`
  --background-header: ${({ isTransparent, theme: { colors } }) =>
    isTransparent ? 'transparent' : colors.palette.white[50]};
  padding: ${pxToRem(44)} ${pxToRem(19)} ${pxToRem(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ isHide }) => (isHide ? 0 : 1)};
  background: var(--background-header);
  transition: 0.5s opacity;

  * {
    color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.primary : colors.palette.green[200]};
  }

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 10;
    `};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    padding: ${pxToRem(34)} ${pxToRem(19)};
  }
  @media ${({ theme: { screenSize } }) => screenSize.desktopL} {
    padding: ${pxToRem(34)} ${pxToRem(80)};
  }
`;

export const BurgerBtn = styled.button`
  display: flex;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    display: none;
  }
`;

export const BasketSVG = styled(Basket)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const MobileBasketBtn = styled(Button)`
  display: flex;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    display: none;
  }
`;
