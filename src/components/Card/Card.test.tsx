import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import getDisneyCharacters from '../../API/getDisneyCharacters';
import { server } from '../../mocks/server';
import DisneyCard from './Card';

describe('Given an card component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("When rendering the character's name and image is displayed", async () => {
    const character = await getDisneyCharacters();
    render(
      <MemoryRouter>
        <DisneyCard character={character[0]} />;
      </MemoryRouter>
    );
    const titleElement = screen.getByText('Cobra Bubbles');
    const imageElemnt = screen.getByRole('img');
    expect(titleElement).toBeInTheDocument();
    expect(imageElemnt).toBeInTheDocument();
  });
});
