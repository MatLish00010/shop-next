import { css, DefaultTheme } from 'styled-components';

const breakpoints = {
  s: 480,
  m: 768,
  l: 1024,
  xl: 1200,
};

const screenSize = {
  mobile: `(min-width: 0)`,
  tablet: `(min-width: ${breakpoints.s}px)`,
  desktopM: `(min-width: ${breakpoints.m}px)`,
  desktopL: `(min-width: ${breakpoints.l}px)`,
  desktopXL: `(min-width: ${breakpoints.xl}px)`,
};

const typography = {
  fontFamily: {
    libreFranklin: css`var(--libreFranklin-font)`,
    calistoga: css`var(--calistoga-font)`,
  },
};

const theme: DefaultTheme = {
  colors: {
    palette: {
      primary: '#FBFBFB',
      white: {
        50: '#fff',
        100: '#E0E5E3',
      },
      green: {
        50: '#E1FF8A',
        100: '#738C80',
        200: '#163F2B',
      },
      dark: {
        50: 'hsla(223, 18%, 17%, 0.5)',
      },
    },
  },
  breakpoints,
  screenSize,
  typography,
};

export default theme;
