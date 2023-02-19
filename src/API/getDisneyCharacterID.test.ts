import { server } from '../mocks/server';
import getDisneyCharaterID from './getDisneyCharacterId';

describe('Given a Disney API', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When a character is fetched, then the name of the first character in teh list should return Abu', async () => {
    const character = await getDisneyCharaterID('25');
    expect(character.data[0].name).toBe('Abu');
  });
});
