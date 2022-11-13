import styled from 'styled-components';
import Image from 'next/image';

export const Header = styled.header<{ isTransparent: boolean }>`
  padding: 30px 80px;
  background: ${({ isTransparent }) => (isTransparent ? 'transparent' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${({ isTransparent }) => (isTransparent ? '#fff' : '#163f2b')};
  }
`;

export const WrapperLanguage = styled.div`
  flex: 1 1 100%;
`;

export const ButtonLanguage = styled.button<{ mr?: boolean; isSelected: boolean; isTransparent: boolean }>`
  border: none;
  background: none;
  position: relative;
  margin-right: ${({ mr }) => (mr ? 15 : 0)}px;
  padding: 4px;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  color: ${({ isTransparent }) => (isTransparent ? '#fff' : '#163f2b')};
  font-size: 1rem;
  line-height: 24px;

  &::before {
    content: '';
    position: absolute;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    top: -10px;
    right: 50%;
    transform: translateX(50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${(props) => (props.isTransparent ? '#fff' : '#163f2b')};
  }
`;

export const DescriptionLogo = styled.h1`
  position: absolute;
  visibility: hidden;
`;

export const Logo = styled(Image)`
  object-fit: contain;
`;

export const Nav = styled.nav`
  flex: 1 1 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonLogin = styled.button<{ isTransparent: boolean }>`
  border: none;
  background: none;
  color: ${({ isTransparent }) => (isTransparent ? '#fff' : '#163f2b')};
  font-size: 1rem;
  line-height: 24px;
  text-transform: uppercase;
`;
