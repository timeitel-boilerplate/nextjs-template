import { PlaceholderProp } from '@utils/types';
import { FC } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  height: 100%;
  min-width: 150px;
`;

const Sidebar = styled.div`
  min-width: 120px;
  background: red;
  padding: ${(p) => p.theme.spacing[4]};
`;

// interface LayoutProps {}

export const Layout: FC<PlaceholderProp> = ({ children }) => {
  return (
    <Main>
      <Sidebar>Sidebar</Sidebar>
      <div>{children}</div>
    </Main>
  );
};
