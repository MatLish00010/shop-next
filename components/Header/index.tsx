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
    <header>
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
      <MobileNavigation isOpen={isActiveMobileNav} toggleMobileMenu={toggleMobileMenu} />
    </header>
  );
};

export default Header;
