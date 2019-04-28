import * as React from 'react';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.SFC<ILayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Layout;
