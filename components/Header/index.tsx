import { useState } from 'react';

import ToggleLang from './components/ToggleLang';
import Logo from './components/Logo';
import NavList from './components/NavList';
import MobileNavigation from './components/MobileNavigation';
import { Burger } from './icons';

import * as S from './styled';

type Props = {
  isTransparent?: boolean;
};

const Header = ({ isTransparent = false }: Props) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);

  const toggleMobileMenu = () => setIsActiveMobileNav(!isActiveMobileNav);

  return (
    <S.Header isTransparent={isTransparent}>
      <S.Wrapper isTransparent={isTransparent} isHide={isActiveMobileNav}>
        <S.BurgerBtn onClick={toggleMobileMenu}>
          <Burger width={24} height={24} />
        </S.BurgerBtn>
        <ToggleLang isTransparent={isTransparent} />
        <Logo />
        <NavList />
        <S.MobileBasket onClick={() => console.log('basket')}>
          <S.BasketSVG />
        </S.MobileBasket>
      </S.Wrapper>
      <MobileNavigation isActive={isActiveMobileNav} toggleMobileMenu={toggleMobileMenu} />
    </S.Header>
  );
};

export default Header;
