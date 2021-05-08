import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/Layout';

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
  background: #f1f3f5;

  h1 {
    font-family: 'Open Sans';
    font-size: 2.5rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <div css={container}>
        <section css={titleSection}>
          <h1>Find you want it!</h1>
        </section>
      </div>
    </Layout>
  );
}
