import { theme, ThemeType } from '@theme';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const variants = {
  default: {
    bg: theme.colors.primary,
    color: theme.colors.white
  },
  contained: {},
  outline: {},
  link: {}
};
interface ButtonProps {
  variant?: keyof typeof variants;
  isLoading?: boolean;
  color?: keyof ThemeType;
  children: ReactNode;
}

const ButtonStyled = styled.button<ButtonProps>`
  border-radius: 4px;

  ${({ variant }) =>
    variant &&
    css`
      background-color: variants[variant].bg;
      color: variants[variant].color;
      &:active {
        background-color: variants[variant].bg;
      }
    `}
`;

export const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <ButtonStyled variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
};
