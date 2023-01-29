import styled from 'styled-components';
import pxToRem from 'utils/typography/pxToRem';

export const Container = styled.div`
  display: none;

  @media ${({ theme: { screenSize } }) => screenSize.desktopM} {
    display: flex;
    flex: 1 1 100%;
  }
`;

export const ButtonLanguage = styled.button<{ mr?: boolean; isSelected: boolean; isTransparent: boolean }>`
  position: relative;
  margin-right: ${({ mr }) => (mr ? 15 : 0)}px;
  padding: ${pxToRem(4)};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};

  &::before {
    content: '';
    position: absolute;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    top: -${pxToRem(10)};
    right: 50%;
    transform: translateX(50%);
    width: ${pxToRem(5)};
    height: ${pxToRem(5)};
    border-radius: 50%;
    background-color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.white[50] : colors.palette.green[100]};
  }
`;
