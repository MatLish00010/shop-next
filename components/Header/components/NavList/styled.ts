import styled from 'styled-components';

import { Basket, Heard, Search } from '../../icons';

export const Nav = styled.nav`
  flex: 1 1 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    display: none;
  }
`;

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    display: none;
  }
`;

export const ItemNav = styled.li`
  list-style: none;
  margin-right: 1.8rem;

  &:first-child {
    margin-right: 3.1rem;
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${({ theme: { screenSize } }) => screenSize.desktopBig} {
    margin-right: 1rem;

    &:first-child {
      margin-right: 2.5rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const ButtonLogin = styled(Button)`
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const SearchSVG = styled(Search)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const HeardSVG = styled(Heard)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const BasketSVG = styled(Basket)`
  width: 1.5rem;
  height: 1.5rem;
`;
