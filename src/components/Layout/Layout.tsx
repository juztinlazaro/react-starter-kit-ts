import * as React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ILayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.SFC<ILayoutProps> = ({ children }) => {
  return (
    <section className="layout-section">
      <Header />

      <div className="main-content">{children}</div>

      <Footer />
    </section>
  );
};

export default Layout;
