import React from 'react';
import ReactLogo from 'components/ReactLogo/ReactLogo';
import { HeaderSection, HeaderItem, HeaderTitle } from 'assets/styled/header.style';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderSection>
      <HeaderItem>
        <HeaderTitle>
          <ReactLogo />
        </HeaderTitle>
      </HeaderItem>

      <Navigation />
    </HeaderSection>
  );
};

export default Header;
