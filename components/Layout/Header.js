import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

const container = css`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  font-family: 'Raleway', sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const brandStyle = css`
  .brand-logo {
    font-size: 1.25rem;
  }
`;

const menuStyle = css`
  margin: 0 2rem;
  padding-top: 0.125rem;

  .menu-item {
    font-size: 1rem;
    font-weight: 300;

    &-icon {
      display: none;
    }

    @media screen and (max-width: 576px) {
      &-context {
        display: none;
      }
      &-icon {
        display: flex;
      }
    }
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
      <a className="menu-item">
        <span className="menu-item-context">Cocktail</span>
        <img
          className="menu-item-icon"
          src="/images/icons/cocktail.svg"
          alt="menu-cocktail"
          width={24}
          height={24}
        />
      </a>
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
