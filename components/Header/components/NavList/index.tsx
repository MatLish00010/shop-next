import * as S from './styled';

const NavList = () => (
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
);

export default NavList;
