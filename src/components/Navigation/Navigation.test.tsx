import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Given a Navigation component', () => {
  test('When rendered, Then it should show the Navigation Bar with a list', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const LinkElementList = screen.getAllByRole('listitem');
    expect(LinkElementList).toHaveLength(8);
  });
});
