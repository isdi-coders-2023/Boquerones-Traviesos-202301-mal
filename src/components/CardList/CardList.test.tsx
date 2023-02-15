import { render, screen } from '@testing-library/react';
import getDisneyCharacters from '../../API/getDisneyCharacters';
import { server } from '../../mocks/server';
import CharactersList from './CardList';

describe('Given an cardList component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When rendering the list then it should display a character card', async () => {
    const character = await getDisneyCharacters();
    render(<CharactersList characterList={character.flat()} />);
    const listElement = screen.getAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
  });
});
