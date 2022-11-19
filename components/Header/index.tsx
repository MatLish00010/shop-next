import { useState } from 'react';
import Link from 'next/link';

import * as S from './styled';

const Header = () => {
  const [language, setLanguage] = useState('EN');

  const isTransparent = false;

  return (
    <S.Header isTransparent={isTransparent}>
      <S.WrapperLanguage>
        <S.ButtonLanguage
          mr
          onClick={() => setLanguage('EN')}
          isSelected={language === 'EN'}
          isTransparent={isTransparent}
        >
          EN
        </S.ButtonLanguage>
        <S.ButtonLanguage
          onClick={() => setLanguage('RU')}
          isSelected={language === 'RU'}
          isTransparent={isTransparent}
        >
          RU
        </S.ButtonLanguage>
      </S.WrapperLanguage>
      <Link href="/">
        <S.DescriptionLogo>YONNE</S.DescriptionLogo>
        <S.LogoSVG />
      </Link>

      <S.Nav>
        <S.ButtonLogin onClick={() => console.log('go Login')}>Login</S.ButtonLogin>
        <S.SearchSVG />
        <S.HeaderSVG />
        <S.BasketSVG />
      </S.Nav>
    </S.Header>
  );
};

export default Header;
