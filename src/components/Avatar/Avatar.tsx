import { ThemeColorType } from '@theme';
import styled from 'styled-components';

type AvatarSizes = {
  sm: string;
  md: string;
  lg: string;
};

export const Avatar = styled.div<{
  color: keyof ThemeColorType;
  size: AvatarSizes;
}>`
  border-radius: 50%;
`;
