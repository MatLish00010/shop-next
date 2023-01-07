import Link from 'next/link';

import * as S from './styled';

const Logo = () => (
  <Link href="/">
    <S.DescriptionLogo>YONNE</S.DescriptionLogo>
    <S.LogoSVG />
  </Link>
);
export default Logo;
