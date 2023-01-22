import styled from 'styled-components';

import { Logo } from '../../icons';

export const DescriptionLogo = styled.h1`
  position: absolute;
  visibility: hidden;
`;

export const LogoSVG = styled(Logo)`
  width: 7rem;
  height: 2rem;

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    width: 4rem;
    height: 1rem;
  }
`;
