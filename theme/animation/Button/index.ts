import { css } from 'styled-components';

const animationButton = css`
  transition: 100ms transform ease-in-out;

  &:hover {
    &::after {
      opacity: 0.2;
    }
  }

  &:active {
    &::after {
      opacity: 0.5;
    }

    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.palette.primary};
    opacity: 0;
    transition: 100ms opacity ease-in;
    z-index: 1;
  }
`;

export default animationButton;
