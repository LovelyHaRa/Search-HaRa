import { render } from '@testing-library/react';

import { sampleRecipeitem } from 'lib/data';

import RecipeItem from 'components/RecipeItem';

const props = {
  item: sampleRecipeitem,
  isLoading: false,
};

describe('<RecipeItem />', () => {
  it('should be render', () => {
    const { getByText } = render(<RecipeItem {...props} />);

    expect(getByText('Martini')).toBeInTheDocument();
    expect(getByText('Gin Based')).toBeInTheDocument();

    expect(getByText('Stur')).toBeInTheDocument();

    expect(getByText('Dry Gin')).toBeInTheDocument();
    expect(getByText('2oz')).toBeInTheDocument();
    expect(getByText('Dry Vermouth')).toBeInTheDocument();
    expect(getByText('1/3oz')).toBeInTheDocument();
  });
});
