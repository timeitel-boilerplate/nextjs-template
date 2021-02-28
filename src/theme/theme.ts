import {} from 'styled-components';

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
declare module 'styled-components' {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}
