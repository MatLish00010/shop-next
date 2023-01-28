import styled from 'styled-components';

import pxToRem from 'utils/typography/pxToRem';
import { Basket } from './icons';

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div<{ isHide: boolean; isTransparent: boolean }>`
  padding: ${pxToRem(44)} ${pxToRem(19)} ${pxToRem(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ isHide }) => (isHide ? 0 : 1)};
  background: ${({ isTransparent, theme: { colors } }) => (isTransparent ? 'transparent' : colors.palette.white[50])};
  transition: 0.5s opacity;

  * {
    color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.primary : colors.palette.green[100]};
  }
`;

export const BurgerBtn = styled.button`
  padding: 0;
  display: flex;
`;

export const BasketSVG = styled(Basket)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const MobileBasket = styled(Button)`
  display: none;

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    display: flex;
  }
`;
