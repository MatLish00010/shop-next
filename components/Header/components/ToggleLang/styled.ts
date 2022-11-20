import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 100%;

  @media ${({ theme: { screenSize } }) => screenSize.tablet} {
    display: none;
  }
`;

export const ButtonLanguage = styled.button<{ mr?: boolean; isSelected: boolean; isTransparent: boolean }>`
  border: none;
  background: none;
  position: relative;
  margin-right: ${({ mr }) => (mr ? 15 : 0)}px;
  padding: 0.25rem;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  font-size: 1rem;
  line-height: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    top: -0.62rem;
    right: 50%;
    transform: translateX(50%);
    width: 0.31rem;
    height: 0.31rem;
    border-radius: 50%;
    background-color: ${({ isTransparent, theme: { colors } }) =>
      isTransparent ? colors.palette.white : colors.palette.secondary};
  }
`;
