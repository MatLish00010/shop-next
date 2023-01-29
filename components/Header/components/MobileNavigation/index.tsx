import { Cross, Heard, Search, Basket } from '../../icons';

import * as S from './styled';

type Props = {
  isOpen: boolean;
  toggleMobileMenu: () => void;
};

const MobileNavigation = ({ isOpen = false, toggleMobileMenu }: Props) => {
  const actionsConfig = [
    {
      name: 'search',
      icon: <Search width={24} height={24} />,
      callback: () => console.log('Search'),
    },
    {
      name: 'like',
      icon: <Heard width={24} height={24} />,
      callback: () => console.log('Like'),
    },
    {
      name: 'basket',
      icon: <Basket width={24} height={24} />,
      callback: () => console.log('Basket'),
    },
  ];

  const navConfig = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Shop',
      path: '/',
    },
    {
      name: 'Collections',
      path: '/',
    },
    {
      name: 'About',
      path: '/',
    },
    {
      name: 'Login',
      path: '/',
    },
  ];

  return (
    <S.Wrapper isOpen={isOpen} onDismiss={toggleMobileMenu}>
      <S.TopBar>
        <S.Title>Menu</S.Title>
        <S.ButtonClose onClick={toggleMobileMenu}>
          <Cross width={32} height={32} />
        </S.ButtonClose>
      </S.TopBar>
      <S.Actions>
        {actionsConfig.map((item) => (
          <li key={item.name}>
            <S.ButtonAction onClick={item.callback}>{item.icon}</S.ButtonAction>
          </li>
        ))}
      </S.Actions>
      <nav>
        <S.ListNav>
          {navConfig.map((item) => (
            <S.ItemNav key={item.name}>
              <S.LinkNav href={item.path}>{item.name}</S.LinkNav>
            </S.ItemNav>
          ))}
        </S.ListNav>
      </nav>
    </S.Wrapper>
  );
};

export default MobileNavigation;
