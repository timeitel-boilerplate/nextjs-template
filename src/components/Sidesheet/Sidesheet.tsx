import { FC } from 'react';
import styled from 'styled-components';

export interface SideSheetProps {
  isExpanded?: boolean;
  toggleExpanded?: () => void;
}

export const SideSheetHeader = styled.h6`
  color: ${(p) => p.theme.color.grey500};
  display: flex;
  white-space: nowrap;
`;

export const SideSheetBase = styled.div<SideSheetProps>`
  align-items: flex-start;
  background: ${(p) => p.theme.color.grey100};
  display: flex;
  color: ${(p) => p.theme.color.grey700};
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px 0 32px;
`;

const Sheet = styled(SideSheetBase)`
  border: ${(p) => p.theme.color.grey300};
  height: 100%;
`;

export const SideSheet: FC<SideSheetProps> = ({ isExpanded, children }) => {
  return <Sheet isExpanded={isExpanded}>{children}</Sheet>;
};
