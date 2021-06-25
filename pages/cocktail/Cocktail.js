import React from 'react';
import { css } from '@emotion/react';

import palette from 'styles/palette';

import Layout from 'components/Layout';
import RecipeItem from 'components/RecipeItem';

const Cocktail = ({ recipes, error }) => {
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
    padding: 0 3rem;
    background: ${palette.gray[1]};

    h1 {
      font-family: 'Open Sans';
      font-size: 2.5rem;
    }

    & > div + div {
      margin: 1.5rem;
    }
  `;

  return (
    <Layout>
      <div css={container}>
        <section css={titleSection}>
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.name}
              item={recipe}
              isLoading={!recipes && !error}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Cocktail;
