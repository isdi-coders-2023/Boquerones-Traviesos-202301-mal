import Character from './character';

export enum ActionTypes {
  SHOW_CHARACTERS = 'showCharacters',
  HOME_NEXT_PAGE = 'homeNextPage',
  HOME_PREVIOUS_PAGE = 'homePreviousPage',
  FAVOURITES_PREVIOUS_PAGE = 'favouritesPreviousPage',
  FAVOURITES_NEXT_PAGE = 'favouritesNextPage',
}

type DisneyAction =
  | {
      type: ActionTypes.SHOW_CHARACTERS;
      payload: Character[];
    }
  | {
      type: ActionTypes.HOME_NEXT_PAGE;
    }
  | {
      type: ActionTypes.HOME_PREVIOUS_PAGE;
    }
  | {
      type: ActionTypes.FAVOURITES_PREVIOUS_PAGE;
    }
  | {
      type: ActionTypes.FAVOURITES_NEXT_PAGE;
    };

export default DisneyAction;
