import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from 'appRoot/App.context';
import { LinkItem, HeaderItem } from 'assets/styled/header.style';

const Navigation = () => {
  const { isLoggedIn, onLogin, onLogout } = useAppContext();

  return (
    <HeaderItem>
      {isLoggedIn ? (
        <>
          <LinkItem>
            <Link to="/">
              Home
            </Link>
          </LinkItem>

          <LinkItem>
            <Link to="/test">
              Test
            </Link>
          </LinkItem>

          <LinkItem>
            <Link to="/public">
              Public
            </Link>
          </LinkItem>

          <button className="action-button logout" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <button className="action-button login" onClick={onLogin}>
          Login
        </button>
      )}
    </HeaderItem>
  );
};

export default Navigation;
