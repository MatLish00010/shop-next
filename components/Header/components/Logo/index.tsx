import SRonly from 'components/SRonly';

import * as S from './styled';

const Logo = () => (
  <S.LinkWrapper href="/">
    <SRonly>YONNE</SRonly>
    <S.LogoSVG />
  </S.LinkWrapper>
);
export default Logo;
