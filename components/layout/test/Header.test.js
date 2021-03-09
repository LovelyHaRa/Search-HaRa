import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('<Header />', () => {
  it('should be render', () => {
    const { getByText } = render(<Header />);

    expect(getByText(/SEARCH HARA/)).toBeInTheDocument();
  });
});