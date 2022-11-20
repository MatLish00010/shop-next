import { DefaultTheme } from 'styled-components';

const breakpoints = {
  s: 480,
  m: 768,
  l: 1024,
  xl: 1200,
};

const screenSize = {
  mobile: `(max-width: ${breakpoints.s}px)`,
  tablet: `(max-width: ${breakpoints.m}px)`,
  desktop: `(max-width: ${breakpoints.l}px)`,
  desktopBig: `(max-width: ${breakpoints.xl}px)`,
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
};

export default theme;
