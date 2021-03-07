import {} from 'styled-components';

const colors = {
  primary: '#2563eb',
  secondary: '#9ca3af',
  white: '#ffffff',
  info: '#059669',
  grey100: '#f3f4f6',
  grey300: '#d1d5db',
  grey500: '#6b7280',
  grey700: '#374151',
  black: '#111827'
};

export const theme = {
  color: colors,
  spacing: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  shadow: {
    light: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
    normal: '1px 1px 3px 1px rgba(0, 0, 0, 0.2)',
    strong: '1px 1px 5px 1px rgba(0, 0, 0, 0.3)'
  }
};

export type ThemeType = typeof theme;

declare module 'styled-components' {
  type Theme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
