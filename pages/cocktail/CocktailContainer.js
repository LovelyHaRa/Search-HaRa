import React from 'react';
import useSWR from 'swr';

import { fetcher } from 'lib/api';
import Cocktail from './Cocktail';

const CocktailContainer = () => {
  const { data: recipes, error } = useSWR('/api/recipes', fetcher);

  if (!recipes) return null;
  return <Cocktail recipes={recipes} error={error} />;
};

export default CocktailContainer;
