import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      palette: {
        primary: '#FBFBFB';
        secondary: '#163F2B';
        tertiary: '#738C80';
      };
      background: {
        primary: '#FBFBFB';
        secondary: '#E1FF8A';
        tertiary: '#E3E8E6';
      };
    };
  }
}
