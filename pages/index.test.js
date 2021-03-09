import React from 'react';

import { render } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  it('should be render', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveClass('search-hara-header');
  });
});
