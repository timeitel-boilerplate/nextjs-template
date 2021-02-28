import { DefaultTheme } from 'styled-components';

export const createSpacing = (parameters: string[]) => (multiplier: number) => (
  props: DefaultTheme
): string => {
  const value = props.theme.spacing(multiplier);
  return parameters.map((param) => `${param}: ${value}px`).join('');
};

export const mx = createSpacing(['margin-left', 'margin-right']);
export const mt = createSpacing(['margin-top']);
export const mb = createSpacing(['margin-bottom']);
export const m = createSpacing(['margin']);

export const px = createSpacing(['padding-left', 'padding-right']);
export const pt = createSpacing(['padding-top']);
export const pb = createSpacing(['padding-bottom']);
export const p = createSpacing(['padding']);
