import React from "react";
import ReactLogo from "components/ReactLogo/ReactLogo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <section className="header-section">
      <div className="item">
        <span className="title">
          <ReactLogo />
        </span>
      </div>

      <Navigation />
    </section>
  );
};

export default Header;
