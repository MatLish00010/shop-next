import { useState } from 'react';

import ToggleLang from './components/ToggleLang';
import Logo from './components/Logo';
import NavList from './components/NavList';
import { Burger } from './icons';

import * as S from './styled';

type Props = {
  isTransparent?: boolean;
};

const Header = ({ isTransparent = false }: Props) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(true);

  const toggleMobileMenu = () => setIsActiveMobileNav(!isActiveMobileNav);

  return (
    <S.Header isTransparent={isTransparent}>
      <S.BurgerBtn onClick={toggleMobileMenu}>
        <Burger width={24} height={24} />
      </S.BurgerBtn>
      <ToggleLang isTransparent={isTransparent} />
      <Logo />
      <NavList />
      <S.MobileBasket onClick={() => console.log('basket')}>
        <S.BasketSVG />
      </S.MobileBasket>
    </S.Header>
  );
};

export default Header;
