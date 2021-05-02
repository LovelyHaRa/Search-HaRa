import React from 'react';
import { css } from '@emotion/react';

const main = css`
  padding-top: 3rem;
`;

const Main = ({ children }) => {
  return <main css={main}>{children}</main>;
};

export default Main;
