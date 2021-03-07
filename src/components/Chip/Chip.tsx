import { AvatarProps } from 'components/Avatar';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface ChipProps {
  label: string;
  avatar: ReactElement<AvatarProps> | Array<ReactElement<AvatarProps>>;
}

const StyledChip = styled.div`
  border-radius: 25;
`;

export const Chip: FC<ChipProps> = ({ label, avatar }) => {
  return (
    <StyledChip>
      {avatar}
      {label}
    </StyledChip>
  );
};
