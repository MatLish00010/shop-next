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
    <>
      <S.Header isTransparent={isTransparent} isHide={isActiveMobileNav}>
        <S.BurgerBtn aria-label="mobile menu" onClick={toggleMobileMenu}>
          <Burger width={24} height={24} />
        </S.BurgerBtn>
        <ToggleLang isTransparent={isTransparent} />
        <Logo />
        <NavList />
        <S.MobileBasketBtn aria-label="basket" onClick={() => console.log('basket')}>
          <S.BasketSVG />
        </S.MobileBasketBtn>
      </S.Header>
      <MobileNavigation isOpen={isActiveMobileNav} toggleMobileMenu={toggleMobileMenu} />
    </>
  );
};

export default Header;
