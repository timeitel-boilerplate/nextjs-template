export const color = (variant: string, type = 'main') => (props): string =>
  props.theme.palette[variant][type];
