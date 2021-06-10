import React from 'react';
import useSWR from 'swr';

import { fetcher } from 'lib/api';
import Cocktail from './Cocktail';

const CocktailContainer = () => {
  const { data: item, error } = useSWR('/api/recipes/id', fetcher);

  if (!item) return null;
  return <Cocktail item={item} error={error} />;
};

export default CocktailContainer;
