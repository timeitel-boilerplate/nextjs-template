import 'styled-components';

export const theme = {
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: '#ef5350'
    },
    background: {
      default: '#fff'
    }
  }
};

// extend the module declarations using custom theme type
type Theme = typeof theme;

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
