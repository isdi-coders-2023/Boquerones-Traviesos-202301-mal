import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { MemoryRouter } from 'react-router-dom';

describe('Given a ErrorPage page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    const title = screen.getByRole('heading');
    const paragraph = screen.getByRole('paragraph');
    const image = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
