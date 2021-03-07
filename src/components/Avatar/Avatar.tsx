import { ThemeColorType } from '@theme';
import styled from 'styled-components';

type AvatarSizes = {
  sm: string;
  md: string;
  lg: string;
};

export interface AvatarProps {
  color: ThemeColorType;
  size: AvatarSizes;
}

export const Avatar = styled.div<AvatarProps>`
  border-radius: 50%;
`;
