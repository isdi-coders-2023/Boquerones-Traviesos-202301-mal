import { render, screen } from '@testing-library/react';
import ServerError from './ServerError';
import { MemoryRouter } from 'react-router-dom';

describe('Given a ServerError page', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <MemoryRouter>
        <ServerError />
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
