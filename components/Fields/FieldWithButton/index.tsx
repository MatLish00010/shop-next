import * as S from './styled';

type Props = {
  value: string;
  name: string;
  onChange: (val: string) => void;
  placeholder: string;
  onSubmit: () => void;
};

const FieldWithButton = ({ name, value, onChange, placeholder, onSubmit }: Props) => (
  <S.Wrapper>
    <S.Field
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <S.Button type="button" onClick={onSubmit}>
      <S.CheckSVG />
    </S.Button>
  </S.Wrapper>
);

export default FieldWithButton;
