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
        <S.ListNav>
          <S.ItemNav>
            <S.ButtonLogin onClick={() => console.log('go Login')}>Login</S.ButtonLogin>
          </S.ItemNav>
          <S.ItemNav>
            <S.Button onClick={() => console.log('search')}>
              <S.SearchSVG />
            </S.Button>
          </S.ItemNav>
          <S.ItemNav>
            <S.Button onClick={() => console.log('heard')}>
              <S.HeardSVG />
            </S.Button>
          </S.ItemNav>
          <S.ItemNav>
            <S.Button onClick={() => console.log('basket')}>
              <S.BasketSVG />
            </S.Button>
          </S.ItemNav>
        </S.ListNav>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
