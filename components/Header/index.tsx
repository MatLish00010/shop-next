import ToggleLang from './components/ToggleLang';
import Logo from './components/Logo';
import NavList from './components/NavList';

import * as S from './styled';

type Props = {
  isTransparent?: boolean;
};

const Header = ({ isTransparent = false }: Props) => {
  return (
    <S.Header isTransparent={isTransparent}>
      <S.Burger>Burger</S.Burger>

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
