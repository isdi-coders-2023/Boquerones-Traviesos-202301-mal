import { server } from '../mocks/server';
import getDisneyCharacters from './getDisneyCharacters';

describe('Given a Disney API', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When a character is fetched, then the name of the first character in the list should return Cobra Bubbles', async () => {
    const character = await getDisneyCharacters();
    expect(character[0].name).toBe('Cobra Bubbles');
  });
});
