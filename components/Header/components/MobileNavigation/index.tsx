import * as S from './styled';

type Props = {
  isActive: boolean;
  toggleMobileMenu: () => void;
};

const MobileNavigation = ({ isActive = false, toggleMobileMenu }: Props) => (
  <S.Container isActive={isActive}>
    <h1>Mobile Nav</h1>
    <button type="button" onClick={toggleMobileMenu}>
      Close
    </button>
  </S.Container>
);

export default MobileNavigation;
