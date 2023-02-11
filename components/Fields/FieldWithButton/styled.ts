import styled from 'styled-components';

import CheckIcon from 'assets/check.svg';

import pxToRem from 'utils/typography/pxToRem';

export const Wrapper = styled.div`
  --border-color: ${({ theme: { colors } }) => colors.palette.green[200]};
  display: flex;
  border: 1px solid var(--border-color);
  max-width: ${pxToRem(390)};
`;

export const Field = styled.input`
  background-color: inherit;
  padding: ${pxToRem(22)} ${pxToRem(24)};
  font-size: ${pxToRem(16)};
  color: inherit;
  max-width: ${pxToRem(320)};
  width: 100%;
  border: none;

  &::placeholder {
    color: inherit;
  }
`;

export const Button = styled.button`
  display: grid;
  place-content: center;
  background-color: inherit;
  min-width: ${pxToRem(70)};
  border-left: 1px solid var(--border-color);
`;

export const CheckSVG = styled(CheckIcon)`
  color: inherit;
  width: ${pxToRem(11)};
  height: ${pxToRem(11)};
`;
