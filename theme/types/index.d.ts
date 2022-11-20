import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      palette: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
      };
      border: {
        primary: string;
      };
    };
  }
}
