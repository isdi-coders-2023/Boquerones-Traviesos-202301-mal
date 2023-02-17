import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Given a Navigation component', () => {
  test('When rendered, Then it should show the Navigation Bar with a list', () => {
    render(<Navigation />);
    const LinkElementList = screen.getAllByRole('listitem');
    expect(LinkElementList).toHaveLength(8);
  });
});
