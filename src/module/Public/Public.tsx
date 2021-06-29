import React from 'react';
import ReactTypescriptLogo from 'assets/image/typescriptReact.png';
import { 
  PublicSection,
  AuthorInformation,
  LogoItems,
  ReactTypescriptLogoImage
} from 'assets/styled/public.style';

const Public = () => {
  return (
    <PublicSection>
      <h1>React Typescript Starterkit v1</h1>

      <LogoItems>
        <div className="logo-item">
          <ReactTypescriptLogoImage
            alt="react-ts-logo"
            className="react-typescript-logo"
            src={ReactTypescriptLogo}
          />
        </div>
      </LogoItems>

      <AuthorInformation>
        <div className="about-author _spacer">
          Staterkit for react ts is an opinionated boilerplate for web
          development built on top of create react app and typescript. Helping
          us to stay productive following the best practices. A solid starting
          point for both professionals and beginers.
        </div>
      </AuthorInformation>

      <hr className="_border-bottom-separator" />

      <AuthorInformation>
        <span className="title"> Justin Lazaro</span>
        <span className="position _spacer">Frontend developer</span>

        <div className="about-author _spacer-md">
          "No code is perfect they said, but Good Practices, Code Standards, and
          Principles helps you to be perfect."
        </div>
      </AuthorInformation>
    </PublicSection>
  );
};

export default Public;
