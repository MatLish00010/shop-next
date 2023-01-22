import styled, { keyframes } from 'styled-components';

const openMenu = keyframes`
  0% {
    display: none;
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
    display: block;
  }
`;

export const Container = styled.div<{ isActive: boolean }>`
  animation: ${openMenu} 500ms;
  animation-direction: alternate;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  transform: translateX(${({ isActive }) => (isActive ? 0 : '-100%')});
  backdrop-filter: blur(5px);
`;

export const Nav = styled.nav``;
