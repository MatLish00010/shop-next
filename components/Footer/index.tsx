import Link from 'next/link';
import { useState } from 'react';

import { FieldWithButton } from 'components/Fields';

import * as S from './styled';

const Footer = () => {
  const [emailValue, setEmailValue] = useState('');

  const onChangeEmailValue = (val: string) => setEmailValue(val);
  const onSubmitEmail = () => console.log('Email Sent');

  return (
    <S.Footer>
      <S.Wrapper>
        <S.WrapperItem>
          <S.LogoSVG />
          <S.Navigation>
            <ul>
              <S.ListItem>
                <Link href="/">shop</Link>
              </S.ListItem>
              <S.ListItem>
                <Link href="/">collections</Link>
              </S.ListItem>
              <S.ListItem>
                <Link href="/">about</Link>
              </S.ListItem>
            </ul>
            <ul>
              <S.ListItem>
                <Link href="/">shipping & returns</Link>
              </S.ListItem>
              <S.ListItem>
                <Link href="/">term of use</Link>
              </S.ListItem>
              <S.ListItem>
                <Link href="/">privacy policy</Link>
              </S.ListItem>
            </ul>
          </S.Navigation>
        </S.WrapperItem>
        <S.WrapperItem>
          <FieldWithButton
            placeholder="Enter your email to subscribe"
            value={emailValue}
            name="email"
            onChange={onChangeEmailValue}
            onSubmit={onSubmitEmail}
          />
          <S.SocialList>
            <li>
              <S.SocialLink href="/">
                <S.FacebookSVG />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink href="/">
                <S.InstagramSVG />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink href="/">
                <S.MailSVG />
              </S.SocialLink>
            </li>
          </S.SocialList>
        </S.WrapperItem>
      </S.Wrapper>
      <S.Text>© 2021 Yonne. All rights reserved.</S.Text>
    </S.Footer>
  );
};

export default Footer;
