import React from 'react';

import { render } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  it('should be render', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Search HaRa')).toBeInTheDocument();
  });
});
