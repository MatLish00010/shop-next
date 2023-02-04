import styled, { keyframes } from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Link from 'next/link';

import pxToRem from 'utils/typography/pxToRem';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 20;
  animation: ${slideIn} 500ms;
  background-color: ${({ theme: { colors } }) => colors.palette.dark[50]};
`;

export const Content = styled(DialogContent)`
  padding: ${pxToRem(50)} ${pxToRem(16)} ${pxToRem(20)};

  * {
    color: ${({ theme: { colors } }) => colors.palette.primary};
  }
`;

export const TopBar = styled.div`
  position: relative;
  margin-bottom: ${pxToRem(27)};
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const ButtonClose = styled.button`
  display: grid;
  align-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

export const Actions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(47)};
  margin: 0 0 ${pxToRem(75)} 0;
`;

export const ButtonAction = styled.button`
  padding: 0;
`;

export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${pxToRem(30)};
`;

export const ItemNav = styled.li`
  width: 100%;
`;

export const LinkNav = styled(Link)`
  font-family: ${({ theme: { typography } }) => typography.fontFamily.libreFranklin};
  font-weight: 500;
  font-size: ${pxToRem(30)};
  line-height: ${pxToRem(38)};
  display: block;
  width: 100%;
  text-align: center;
`;
