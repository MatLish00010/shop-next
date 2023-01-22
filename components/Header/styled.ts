import styled from 'styled-components';

import pxToRem from 'utils/typography/pxToRem';
import { Basket } from './icons';

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const Header = styled.header<{ isTransparent: boolean }>`
  * {
    color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.primary : colors.palette.secondary};
  }
`;

export const Wrapper = styled.div<{ isHide: boolean; isTransparent: boolean }>`
  padding: ${pxToRem(44)} ${pxToRem(19)} ${pxToRem(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ isHide }) => (isHide ? 0 : 1)};
  background: ${({ isTransparent, theme: { colors } }) => (isTransparent ? 'transparent' : colors.background.white)};
  transition: 0.5s opacity;
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
