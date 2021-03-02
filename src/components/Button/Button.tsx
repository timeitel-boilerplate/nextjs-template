import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${(p) =>
    p.primary &&
    css`
      margin: ${p.margin};
    `}
  ${(p) =>
    p.padding &&
    css`
      padding: ${p.padding};
    `}
`;
https://github.com/sapegin/cddcourse/blob/master/src/components/Button.js
