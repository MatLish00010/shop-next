import React from 'react';

import { TypesStyled } from './types';

import * as S from './styled';

type Props = TypesStyled & {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ onClick, type = 'button', disabled, children, ...props }: Props) => (
  // eslint-disable-next-line react/button-has-type
  <S.Button {...props} disabled={disabled} type={type} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
