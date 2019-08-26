import React from 'react';
import ReactTypescriptLogo from 'assets/image/typescriptReact.png';

const Public = () => {
  return (
    <section className="public-section">
      <h1>React Typescript Starterkit v1</h1>

      <div className="logo-items">
        <div className="logo-item">
          <img
            alt="react-ts-logo"
            className="react-typescript-logo"
            src={ReactTypescriptLogo}
          />
        </div>
      </div>

      <div className="author-information">
        <div className="about-author _spacer">
          Staterkit for react ts is an opinionated boilerplate for web
          development built on top of create react app and typescript. Helping
          us to stay productive following the best practices. A solid starting
          point for both professionals and beginers.
        </div>
      </div>

      <hr className="_border-bottom-separator" />

      <div className="author-information">
        <span className="title"> Justin Lazaro</span>
        <span className="position _spacer">Frontend developer</span>

        <div className="about-author _spacer-md">
          "No code is perfect they said, but Good Practices, Code Standards, and
          Principles helps you to be perfect."
        </div>
      </div>
    </section>
  );
};

export default Public;
