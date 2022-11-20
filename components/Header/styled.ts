import styled from 'styled-components';

import { Basket } from 'components/svgs';

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const Header = styled.header<{ isTransparent: boolean }>`
  padding: 1.8rem 5rem;
  background: ${({ isTransparent, theme: { colors } }) => (isTransparent ? 'transparent' : colors.background.white)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${({ isTransparent }) => (isTransparent ? 0 : 1)}px;
  border-bottom-color: ${({ theme: { colors } }) => colors.border.primary};
  border-bottom-style: solid;

  * {
    color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.primary : colors.palette.secondary};
  }

  @media ${({ theme: { screenSize } }) => screenSize.desktopBig} {
    padding: 1.25rem 3.5rem;
  }

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    padding: 1rem;
  }
`;

export const Burger = styled(Button)`
  display: none;

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    display: block;
  }
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
