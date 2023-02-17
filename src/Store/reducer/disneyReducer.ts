import DisneyAction, { ActionTypes } from '../types/Action';
import Character from '../types/character';

const charactersReducer = (
  previousDisney: Character[],
  action: DisneyAction
): Character[] => {
  switch (action.type) {
    case ActionTypes.SHOW_CHARACTERS:
      return [...action.payload];
    default:
      return [...previousDisney];
  }
};

export default charactersReducer;
