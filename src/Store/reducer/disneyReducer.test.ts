import DisneyAction, { ActionTypes } from '../types/Action';
import DataStructure from '../types/data';
import disneyReducer from './disneyReducer';
import charactersReducer from './disneyReducer';

describe('Given the app reducer', () => {
  const mockDefault: DataStructure = {
    character: {
      id: 0,
      name: '',
      imageUrl: '',
      films: [],
      tvShows: [],
    },
    characters: [],
    favourites: [],
    homeCurrentPage: 5,
    favouritesCurrentPage: 5,
    homeOffset: 200,
    favouritesOffset: 200,
  };
  const mockMinimumPages: DataStructure = {
    character: {
      id: 0,
      name: '',
      imageUrl: '',
      films: [],
      tvShows: [],
    },
    characters: [],
    favourites: [],
    homeCurrentPage: 1,
    favouritesCurrentPage: 1,
    homeOffset: 0,
    favouritesOffset: 0,
  };

  const mockMaximumPages: DataStructure = {
    character: {
      id: 0,
      name: '',
      imageUrl: '',
      films: [],
      tvShows: [],
    },
    characters: [],
    favourites: [],
    homeCurrentPage: 34,
    favouritesCurrentPage: 1,
    homeOffset: 0,
    favouritesOffset: 0,
  };

  test('When the useReducer function makes no changes, then the state should not change', () => {
    const previousCharacters: DataStructure = {
      character: {
        id: 0,
        name: '',
        imageUrl: '',
        films: [],
        tvShows: [],
      },
      characters: [],
      favourites: [],
      homeCurrentPage: 1,
      favouritesCurrentPage: 1,
      homeOffset: 0,
      favouritesOffset: 0,
    };
    const updateAction = {
      type: 'default' as unknown as ActionTypes,
      payload: [],
    };
    const updateState = charactersReducer(previousCharacters, updateAction);
    expect(updateState).toEqual({
      character: {
        id: 0,
        name: '',
        imageUrl: '',
        films: [],
        tvShows: [],
      },
      characters: [],
      favourites: [],
      homeCurrentPage: 1,
      favouritesCurrentPage: 1,
      homeOffset: 0,
      favouritesOffset: 0,
    });
  });

  test('When the user triggers a previous Home page function on the first page, the Home pagination number should stay the same', () => {
    const previousPageHome: DisneyAction = {
      type: ActionTypes.HOME_PREVIOUS_PAGE,
    };

    const executeNextPageHome = disneyReducer(
      mockMinimumPages,
      previousPageHome
    );
    expect(executeNextPageHome.homeCurrentPage).toBe(
      mockMinimumPages.homeCurrentPage
    );
  });

  test('When the user triggers a next Home page function on the last page, the Home pagination number should stay the same', () => {
    const nextPageHome: DisneyAction = {
      type: ActionTypes.HOME_NEXT_PAGE,
    };

    const executeNextPageHome = disneyReducer(mockMaximumPages, nextPageHome);
    expect(executeNextPageHome.homeCurrentPage).toBe(
      mockMaximumPages.homeCurrentPage
    );
  });

  test('When the user triggers a previous Favourites page function on a page that is not the first, the Favourites pagination number should decrease by 1', () => {
    const previousPageFavourites: DisneyAction = {
      type: ActionTypes.FAVOURITES_PREVIOUS_PAGE,
    };

    const executeNextPageHome = disneyReducer(
      mockDefault,
      previousPageFavourites
    );
    expect(executeNextPageHome.favouritesCurrentPage).toBe(
      mockDefault.favouritesCurrentPage - 1
    );
  });

  test('When the user triggers a next Favourites page function, the Favourites pagination number should increase by 1', () => {
    const nextPageFavourites: DisneyAction = {
      type: ActionTypes.FAVOURITES_NEXT_PAGE,
    };

    const executeNextPageHome = disneyReducer(mockDefault, nextPageFavourites);
    expect(executeNextPageHome.favouritesCurrentPage).toBe(
      mockDefault.favouritesCurrentPage + 1
    );
  });
});
