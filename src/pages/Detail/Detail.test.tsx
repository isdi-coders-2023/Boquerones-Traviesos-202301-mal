import { render, screen } from '@testing-library/react';
import Detail from './Detail';

describe('Given a Home page,', () => {
  test('When there is a title, then render it on the page', () => {
    render(<Detail />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
