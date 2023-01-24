import { css, DefaultTheme } from 'styled-components';

const breakpoints = {
  s: 480,
  m: 768,
  l: 1024,
  xl: 1200,
};

const screenSize = {
  mobile: `(min-width: 0)`,
  tablet: `(max-width: ${breakpoints.s}px)`,
  desktop: `(max-width: ${breakpoints.m}px)`,
  desktopBig: `(max-width: ${breakpoints.xl}px)`,
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
      secondary: '#163F2B',
      tertiary: '#738C80',
      white: '#fff',
    },
    background: {
      primary: '#FBFBFB',
      secondary: '#E1FF8A',
      tertiary: '#E3E8E6',
      white: '#fff',
    },
    border: {
      primary: '#E0E5E3',
    },
  },
  breakpoints,
  screenSize,
  typography,
};

export default theme;
