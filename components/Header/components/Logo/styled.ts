import styled from 'styled-components';
import Link from 'next/link';

import Logo from 'assets/logo.svg';

import pxToRem from 'utils/typography/pxToRem';

export const LinkWrapper = styled(Link)`
  font-size: 0;
`;

export const LogoSVG = styled(Logo)`
  width: ${pxToRem(64)};
  height: ${pxToRem(18)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    width: ${pxToRem(115)};
    height: ${pxToRem(32)};
  }
`;
