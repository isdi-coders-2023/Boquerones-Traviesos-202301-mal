import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { server } from '../../../mocks/server';
import CharacterProvider from '../../../Store/contexts/Character.Provider';
import useGetCharactersList from './useGetCharactersList';

describe('Given a use useGetCharacterList hook', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the user requests a characters list then the hook should return a character', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <CharacterProvider>{children}</CharacterProvider>
    );
    const { result } = renderHook(useGetCharactersList, { wrapper: Wrapper });
    expect(result.current.data.characters).toEqual([]);
    await act(async () => result.current.getCharactersList());
    expect(result.current.data.characters[0]).toEqual({
      id: 908,
      name: 'Cobra Bubbles',
      imageUrl:
        'https://static.wikia.nocookie.net/disney/images/5/55/Cobra_Bubbles_LAS.jpg',
      films: ['Lilo & Stitch', 'Stitch! The Movie', 'Leroy & Stitch'],
      tvShows: ['Lilo & Stitch: The Series', 'Stitch & Ai'],
    });
  });

  test('When the user paginates Home, then the hook should update the page number', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <CharacterProvider>{children}</CharacterProvider>
    );

    const { result } = renderHook(useGetCharactersList, { wrapper: Wrapper });

    await act(async () => result.current.homePagination('next'));
    expect(result.current.data.homeCurrentPage).toBe(2);

    await act(async () => result.current.homePagination('prev'));
    expect(result.current.data.homeCurrentPage).toBe(1);
  });

  test('When the user paginates Favourites, then the hook should update the page number', async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <CharacterProvider>{children}</CharacterProvider>
    );

    const { result } = renderHook(useGetCharactersList, { wrapper: Wrapper });

    await act(async () => result.current.favouritesPagination('next'));
    expect(result.current.data.favouritesCurrentPage).toBe(1);

    await act(async () => result.current.favouritesPagination('prev'));
    expect(result.current.data.homeCurrentPage).toBe(1);
  });
});
