import * as React from 'react';
import { Link } from 'react-router-dom';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
  isLoggedIn: boolean;
}

const Layout: React.SFC<ILayoutProps> = ({ children, isLoggedIn }) => {
  return (
    <section className="layout-section">
      {isLoggedIn && (
        <>
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </>
      )}
      {children}
    </section>
  );
};

export default Layout;
