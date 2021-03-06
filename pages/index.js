import React from 'react';
import { css } from '@emotion/react';

import palette from 'styles/palette';

import Layout from 'components/Layout';

const container = css`
  display: flex;
  flex-direction: column;
`;

const titleSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3rem);
  background: ${palette.gray[1]};

  h1 {
    font-family: 'Open Sans';
    font-size: 2.5rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <div css={container}>
        <div css={titleSection}>
          <h1>Main Page</h1>
        </div>
      </div>
    </Layout>
  );
}
