import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { MemoryRouter } from 'react-router-dom';

describe('Given a Home page,', () => {
  test('When there is a title, then render it on the page', () => {
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
