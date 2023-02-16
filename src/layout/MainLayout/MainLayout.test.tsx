import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

describe('Given a Main Layout component', () => {
  test('When any page is accessed, then return a title', () => {
    render(<MainLayout />);
    const title = screen.getByRole('banner');
    expect(title).toBeInTheDocument();
  });
});
