import { useState } from 'react';

import * as S from './styled';

type Props = {
  isTransparent?: boolean;
};

const ToggleLang = ({ isTransparent = false }: Props) => {
  const [language, setLanguage] = useState('EN');

  return (
    <S.Container>
      <S.ButtonLanguage
        mr
        onClick={() => setLanguage('EN')}
        isSelected={language === 'EN'}
        isTransparent={isTransparent}
      >
        EN
      </S.ButtonLanguage>
      <S.ButtonLanguage onClick={() => setLanguage('RU')} isSelected={language === 'RU'} isTransparent={isTransparent}>
        RU
      </S.ButtonLanguage>
    </S.Container>
  );
};

export default ToggleLang;
