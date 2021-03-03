import { Theme } from '@theme';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const variants = {
  default: {},
  contained: {},
  outline: {},
  link: {}
};
interface ButtonProps {
  variant?: keyof typeof variants;
  isLoading?: boolean;
  color?: keyof Theme;
  children: ReactNode;
}

const ButtonStyled = styled.button<ButtonProps>`
  border-radius: 4px;

  ${({ variant }) =>
    variant === 'default' &&
    css`
      background-color: ${(p) => p.theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      &:active {
        background-color: ${(p) => p.theme.colors.grey700};
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
