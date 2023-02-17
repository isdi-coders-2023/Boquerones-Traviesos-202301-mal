import { render, screen } from '@testing-library/react';
import { link } from 'fs';
import Navigation from './Navigation';

describe('Given a Navigation component', () => {
  test('When rendered, Then it should show the Navigation Bar', () => {
    render(<Navigation />);
    const LinkElementList = screen.getAllByRole('link');
    expect(LinkElementList.length).toEqual(4);
  });
});
