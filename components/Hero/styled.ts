import styled from 'styled-components';
import Image from 'next/image';

import pxToRem from 'utils/typography/pxToRem';

export const Container = styled.section`
  position: relative;
  height: clamp(100vh, 100vh, 812px);
`;

const HeroImage = styled(Image)`
  display: block;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HeroMainImage = styled(HeroImage)`
  display: none;
  height: 100%;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    display: block;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: clamp(100vh, 100vh, ${pxToRem(812)});

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    top: 50%;
    right: 50%;
    transform: translate(50%, -46%);
    max-height: clamp(76%, 77%, ${pxToRem(790)});
    max-width: ${pxToRem(1090)};
  }
`;

export const HeroSubImage = styled(HeroImage)`
  height: 100%;
`;

export const WrapperContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: ${pxToRem(16)} ${pxToRem(16)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    padding: ${pxToRem(40)};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(25)};
  margin-bottom: ${pxToRem(60)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      width: auto;
    }
  }
`;

export const WrapperTitle = styled.div`
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    align-self: center;
    gap: ${pxToRem(20)};
  }
`;

export const Title = styled.p`
  font-family: ${({ theme: { typography } }) => typography.fontFamily.calistoga};
  color: ${({ theme: { colors } }) => colors.palette.primary};
  font-size: ${pxToRem(65)};
  font-weight: 800;
  line-height: ${pxToRem(76)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    font-size: ${pxToRem(110)};
    line-height: ${pxToRem(128)};
  }
`;
