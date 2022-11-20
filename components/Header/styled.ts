import styled from 'styled-components';

import { Logo, Heard, Search, Basket } from 'components/svgs';

export const Header = styled.header<{ isTransparent: boolean }>`
  padding: 30px 80px;
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
`;

export const WrapperLanguage = styled.div`
  flex: 1 1 100%;
`;

export const ButtonLanguage = styled.button<{ mr?: boolean; isSelected: boolean; isTransparent: boolean }>`
  border: none;
  background: none;
  position: relative;
  margin-right: ${({ mr }) => (mr ? 15 : 0)}px;
  padding: 4px;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  font-size: 1rem;
  line-height: 24px;

  &::before {
    content: '';
    position: absolute;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    top: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.white : colors.palette.secondary};
  }
`;

export const DescriptionLogo = styled.h1`
  position: absolute;
  visibility: hidden;
`;

export const LogoSVG = styled(Logo)`
  width: 115px;
  height: 32px;
`;

export const SearchSVG = styled(Search)`
  width: 24px;
  height: 24px;
`;

export const HeardSVG = styled(Heard)`
  width: 24px;
  height: 24px;
`;

export const BasketSVG = styled(Basket)`
  width: 24px;
  height: 24px;
`;

export const Nav = styled.nav`
  flex: 1 1 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
`;

export const ItemNav = styled.li`
  list-style: none;
  margin-right: 30px;

  &:first-child {
    margin-right: 50px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
`;

export const ButtonLogin = styled(Button)`
  font-size: 1rem;
  line-height: 24px;
  text-transform: uppercase;
`;
