import { FlattenSimpleInterpolation } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      palette: {
        primary: string;
        white: {
          50: string;
          100: string;
          200: string;
        };
        green: {
          50: string;
          100: string;
          200: string;
        };
        dark: {
          50: string;
        };
      };
    };
    breakpoints: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    screenSize: {
      mobile: string;
      tablet: string;
      desktopM: string;
      desktopL: string;
      desktopXL: string;
    };
    typography: {
      fontFamily: {
        libreFranklin: FlattenSimpleInterpolation;
        calistoga: FlattenSimpleInterpolation;
      };
    };
  }
}
