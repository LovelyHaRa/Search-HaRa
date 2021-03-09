import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

const container = css`
  position: fixed;
  width: 100%;
  height: 3rem;
`;

const brand = css`
  padding: 1rem;
  .brand-logo {
    font-size: 1.25rem;
  }
`;

const Brand = () => {
  return (
    <div css={brand}>
      <Link href="/">
        <a className="brand-logo">SEARCH HARA</a>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div css={container} className="search-hara-header">
      <Brand />
    </div>
  );
};

export default Header;
