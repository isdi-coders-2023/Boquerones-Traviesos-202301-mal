import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import getDisneyCharacters from '../../API/getDisneyCharacters';
import { server } from '../../mocks/server';
import CharactersList from './CardList';

describe('Given an cardList component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When rendering the list then it should display a character card', async () => {
    const characters = await getDisneyCharacters();
    render(
      <MemoryRouter>
        <CharactersList characterList={characters} />
      </MemoryRouter>
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement).toBeInTheDocument();
  });
});
