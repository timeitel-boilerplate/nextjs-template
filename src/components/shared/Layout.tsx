import { FC } from 'react';

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div style={{ background: 'red' }}>Sidebar</div>
      <div>{children}</div>
    </>
  );
};
