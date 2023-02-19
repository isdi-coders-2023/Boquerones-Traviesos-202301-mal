import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';
import { MemoryRouter } from 'react-router-dom';

describe('Given a Main Layout component', () => {
  test('When any page is accessed, then return a title', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );
    const title = screen.getByRole('banner');
    expect(title).toBeInTheDocument();
  });
});
