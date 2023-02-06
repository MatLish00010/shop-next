import Button from 'components/Button';
import Header from 'components/Header';

import ImageHeroMain from './assets/hero-main.jpg';
import ImageHeroSub from './assets/hero-sub.jpg';

import * as S from './styled';

const Hero = () => (
  <S.Container>
    <Header isTransparent />
    <S.HeroMainImage src={ImageHeroMain} alt="Hero" priority />
    <S.Content>
      <S.HeroSubImage src={ImageHeroSub} alt="Hero sub" priority fill />
      <S.WrapperContent>
        <S.WrapperButton>
          <Button variant="text" onClick={() => console.log('click')}>
            Shop now
          </Button>
          <Button variant="outlined" onClick={() => console.log('click')}>
            Explore Collections
          </Button>
        </S.WrapperButton>
        <S.WrapperTitle>
          <S.Title>Simple.</S.Title>
          <S.Title>Timeless.</S.Title>
        </S.WrapperTitle>
      </S.WrapperContent>
    </S.Content>
  </S.Container>
);

export default Hero;
