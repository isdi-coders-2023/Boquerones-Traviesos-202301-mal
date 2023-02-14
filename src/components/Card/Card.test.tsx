import { render, screen } from '@testing-library/react';
import DisneyCard from './Card';

describe('Given an card component', () => {
  test("When rendering the character's name and image is displayed", () => {
    render(<DisneyCard />);
    const titleElement = screen.getByText('Mickey Mouse');
    const imageElemnt = screen.getByRole('img');
    expect(titleElement).toBeInTheDocument();
    expect(imageElemnt).toBeInTheDocument();
  });
});
