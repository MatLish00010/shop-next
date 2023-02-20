import styled, { css } from 'styled-components';
import Link from 'next/link';

import pxToRem from 'utils/typography/pxToRem';

import Logo from 'assets/logo.svg';
import { FacebookIcon, InstagramIcon, MailIcon } from './icons';

export const Footer = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.palette.green[50]};
  padding: ${pxToRem(40)} ${pxToRem(16)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    padding: ${pxToRem(80)} ${pxToRem(80)} ${pxToRem(60)};
  }

  * {
    color: ${({ theme: { colors } }) => colors.palette.green[200]};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: ${pxToRem(74)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const WrapperItem = styled.div`
  margin-bottom: ${pxToRem(60)};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    margin: 0;

    &:last-child {
      margin-bottom: -10px;
    }
  }
`;

export const LogoSVG = styled(Logo)`
  width: ${pxToRem(77)};
  height: ${pxToRem(22)};
  margin-bottom: ${pxToRem(32)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    width: ${pxToRem(115)};
    height: ${pxToRem(32)};
    margin-bottom: ${pxToRem(77)};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${pxToRem(85)};
`;

export const ListItem = styled.li`
  text-transform: uppercase;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(24)};
  font-weight: 400;
  margin-bottom: ${pxToRem(12)};

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    font-size: ${pxToRem(16)};
    margin-bottom: ${pxToRem(20)};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SocialList = styled.ul`
  margin-top: ${pxToRem(25)};
  display: flex;
  align-items: center;
  gap: ${pxToRem(15)};
`;

export const SocialLink = styled(Link)`
  padding: ${pxToRem(10)};
  display: block;
`;

const IconSizes = css`
  width: ${pxToRem(18)};
  height: ${pxToRem(18)};
`;

export const FacebookSVG = styled(FacebookIcon)`
  ${IconSizes}
`;

export const InstagramSVG = styled(InstagramIcon)`
  ${IconSizes}
`;

export const MailSVG = styled(MailIcon)`
  ${IconSizes}
`;

export const Text = styled.p`
  font-size: ${pxToRem(14)};
  font-weight: 300;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    font-size: ${pxToRem(16)};
  }
`;
