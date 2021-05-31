import React from 'react';
import { render } from '@testing-library/react';

import { sampleRecipeitem } from 'lib/data';

import Home from '.';

const props = {
  item: sampleRecipeitem,
};

describe('<Home />', () => {
  it('should be render', () => {
    const { container } = render(<Home {...props} />);

    expect(container.firstChild).toHaveClass('search-hara-header');
  });
});
