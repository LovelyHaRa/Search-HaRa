import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

const container = css`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-family: 'Raleway', sans-serif;
`;

const brandStyle = css`
  padding: 1rem;
  .brand-logo {
    font-size: 1.5rem;
  }
`;

const menuStyle = css`
  margin: 0 2rem;
  .menu-item {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const Brand = () => (
  <div css={brandStyle}>
    <Link href="/">
      <a className="brand-logo">Search HaRa</a>
    </Link>
  </div>
);

const Menu = () => (
  <div css={menuStyle}>
    <Link href="/cocktail">
      <a className="menu-item">Cocktail</a>
    </Link>
  </div>
);

const Header = () => {
  return (
    <div css={container} className="search-hara-header">
      <Brand />
      <Menu />
    </div>
  );
};

export default Header;
