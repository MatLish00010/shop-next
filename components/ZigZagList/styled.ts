import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import pxToRem from 'utils/typography/pxToRem';

export const Section = styled.section`
  padding: ${pxToRem(70)} ${pxToRem(16)} ${pxToRem(80)};
  max-width: ${pxToRem(1920)};
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    padding: ${pxToRem(130)} ${pxToRem(60)} ${pxToRem(220)};
  }
`;

export const WrapperTitle = styled.div`
  margin-bottom: ${pxToRem(50)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopL} {
    display: none;
  }
`;

export const WrapperTitleDesktop = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(calc(105% + var(--gap-column)));
  max-width: ${pxToRem(670)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopL} {
    display: block;
  }
`;

export const Title = styled.h2`
  font-size: ${pxToRem(40)};
  font-weight: 700;
  line-height: ${pxToRem(46.8)};
  font-family: ${({ theme: { typography } }) => typography.fontFamily.calistoga};
  color: ${({ theme: { colors } }) => colors.palette.green[200]};
  margin-bottom: ${pxToRem(10)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopL} {
    margin-bottom: ${pxToRem(32)};
  }
`;

export const Description = styled.p`
  line-height: ${pxToRem(24)};
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.palette.green[100]};

  @media ${({ theme: { screenSize } }) => screenSize.desktopL} {
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(36)};
  }
`;

export const List = styled.ul`
  --gap-column: ${pxToRem(60)};
  --gap-row: 75%;

  display: grid;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--gap-column);
  }

  @media ${({ theme: { screenSize } }) => screenSize.desktopL} {
    --gap-column: ${pxToRem(123)};
  }
`;

export const Item = styled.li`
  position: relative;
  max-width: ${pxToRem(815)};
  width: 100%;
  aspect-ratio: auto 1 / 1;
  margin-bottom: ${pxToRem(80)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    margin-bottom: var(--gap-row);

    &:nth-of-type(even) {
      transform: translateY(calc(50% + var(--gap-row) / 2));
    }
  }
`;

export const ItemTitle = styled.h3`
  font-family: ${({ theme: { typography } }) => typography.fontFamily.libreFranklin};
  font-size: ${pxToRem(28)};
  line-height: ${pxToRem(36)};
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.palette.green[200]};
  position: absolute;
  bottom: -${pxToRem(50)};
  left: 0;
`;

export const ItemImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemButton = styled(Link)`
  backdrop-filter: blur(15px);
  text-align: center;
  font-family: ${({ theme: { typography } }) => typography.fontFamily.libreFranklin};
  color: ${({ theme: { colors } }) => colors.palette.primary};
  padding: ${pxToRem(22)};
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.palette.dark[50]};
    opacity: 0.4;
    z-index: -1;
  }

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    margin-bottom: ${pxToRem(40)};
    width: 90%;
    align-self: center;
  }

  ${({ theme: { animations } }) => animations.button}
`;
