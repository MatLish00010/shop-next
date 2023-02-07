import styled from 'styled-components';
import Image from 'next/image';

import pxToRem from 'utils/typography/pxToRem';

export const Section = styled.section`
  padding: ${pxToRem(70)} ${pxToRem(16)} ${pxToRem(80)};
  max-width: ${pxToRem(1920)};
  width: 100%;
  margin: 0 auto;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    padding: ${pxToRem(130)} ${pxToRem(60)} ${pxToRem(220)};
  }
`;

export const WrapperTitle = styled.div`
  margin-bottom: ${pxToRem(50)};
`;

export const Title = styled.h1`
  font-size: ${pxToRem(40)};
  font-weight: 700;
  line-height: ${pxToRem(46.8)};
  font-family: ${({ theme: { typography } }) => typography.fontFamily.calistoga};
  color: ${({ theme: { colors } }) => colors.palette.green[200]};
  margin-bottom: ${pxToRem(10)};
`;

export const Description = styled.p`
  line-height: ${pxToRem(24)};
  font-size: ${pxToRem(16)};
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.palette.green[100]};
`;

export const List = styled.ul`
  --gap-column: ${pxToRem(123)};
  --gap-row: 75%;

  display: grid;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--gap-column);
  }
`;

export const Item = styled.li`
  position: relative;
  max-width: ${pxToRem(815)};
  width: 100%;
  aspect-ratio: auto 1 / 1;
  margin-bottom: ${pxToRem(80)};

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

export const ItemImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
