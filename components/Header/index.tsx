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
        <S.Logo src={isTransparent ? '/images/logo.png' : '/images/logoDark.png'} width={155} height={32} alt="Logo" />
      </Link>

      <S.Nav>
        <S.ButtonLogin isTransparent={isTransparent} onClick={() => console.log('go Login')}>
          Login
        </S.ButtonLogin>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
