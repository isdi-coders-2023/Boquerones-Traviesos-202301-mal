import { render, screen } from '@testing-library/react';
import getDisneyCharaterID from '../../API/getDisneyCharacterId';
import { server } from '../../mocks/server';
import DisneyDetailCard from './DetailCard';
import { MemoryRouter } from 'react-router-dom';

describe('Given a detail card component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());
  test('When rendering the character name and image is displayed', async () => {
    const character = await getDisneyCharaterID('25');
    console.log(character);
    render(
      <MemoryRouter>
        <DisneyDetailCard character={character.data[0]} />
      </MemoryRouter>
    );
    const titleElement = screen.getByRole('heading');
    const imageElement = screen.getByRole('img');
    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
