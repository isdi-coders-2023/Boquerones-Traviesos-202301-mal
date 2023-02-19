import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';
import { MemoryRouter } from 'react-router-dom';

describe('Given a NotFound page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <MemoryRouter>
        {' '}
        <PageNotFound />
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
