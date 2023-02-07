import Image_1 from 'assets/image_1.png';
import Image_2 from 'assets/image_2.png';
import Image_3 from 'assets/image_3.png';

import * as S from './styled';

const ZigZagList = () => (
  <S.Section>
    <S.WrapperTitle>
      <S.Title>Collection</S.Title>
      <S.Description>
        Each collection is inspired by something special. If you are close to one item, you should definitely see the
        entire collection.
      </S.Description>
    </S.WrapperTitle>
    <S.List>
      <S.Item>
        <S.ItemImage src={Image_1} alt="image_1" />
      </S.Item>
      <S.Item>
        <S.ItemImage src={Image_2} alt="image_2" />
      </S.Item>
      <S.Item>
        <S.ItemImage src={Image_3} alt="image_3" />
      </S.Item>
    </S.List>
  </S.Section>
);

export default ZigZagList;
