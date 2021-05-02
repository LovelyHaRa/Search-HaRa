import React from 'react';
import { render } from '@testing-library/react';

import Main from '../Main';

describe('<Main />', () => {
  it('should be render', () => {
    const { container, getByText } = render(
      <Main>
        <p>content</p>
      </Main>,
    );

    expect(container.firstChild).toHaveStyle({ paddingTop: '3rem' });
    expect(getByText(/content/)).toBeInTheDocument();
  });
});
