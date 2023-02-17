import { render, screen } from '@testing-library/react';
import Favourites from './Favorites';

describe('Given a Favourites page', () => {
  test('When there is a title, then render it on the page', () => {
    render(<Favourites />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
