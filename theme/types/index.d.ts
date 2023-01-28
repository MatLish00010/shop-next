import { FlattenSimpleInterpolation } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      palette: {
        primary: string;
        white: {
          50: string;
          100: string;
        };
        green: {
          50: string;
          100: string;
          200: string;
        };
      };
      border: {
        primary: string;
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
      desktop: string;
      desktopBig: string;
    };
    typography: {
      fontFamily: {
        libreFranklin: FlattenSimpleInterpolation;
        calistoga: FlattenSimpleInterpolation;
      };
    };
  }
}
