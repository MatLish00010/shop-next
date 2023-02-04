import styled from 'styled-components';

import pxToRem from 'utils/typography/pxToRem';
import { Basket, Heard, Search } from '../../icons';

export const Nav = styled.nav`
  display: none;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    display: flex;
    flex: 1 1 100%;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
`;

export const ItemNav = styled.li`
  margin-right: ${pxToRem(20)};

  &:first-child {
    margin-right: ${pxToRem(30)};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;

export const ButtonLogin = styled(Button)`
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};
  text-transform: uppercase;
`;

export const SearchSVG = styled(Search)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const HeardSVG = styled(Heard)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;

export const BasketSVG = styled(Basket)`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
`;
