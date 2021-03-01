import { colors } from './colors';

export const theme = {
  ...colors,
  space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  shadow: {
    light: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
    normal: '1px 1px 3px 1px rgba(0, 0, 0, 0.2)',
    strong: '1px 1px 5px 1px rgba(0, 0, 0, 0.3)'
  }
};

export type Theme = typeof theme;
export type ThemeProps = { theme?: Theme };
