import DisneyAction, { ActionTypes } from '../types/Action';
import Character from '../types/character';

const charactersReducer = (
  previousDisney: { characters: Character[]; character: Character },
  action: DisneyAction
): { characters: Character[]; character: Character } => {
  switch (action.type) {
    case ActionTypes.SHOW_CHARACTERS:
      return {
        characters: [...action.payload],
        character: { id: 0, name: '', imageUrl: '', films: [], tvShows: [] },
      };
    case ActionTypes.SHOW_CHARACTER_DETAILS:
      return {
        characters: [],
        character: { ...action.payload },
      };
    default:
      return {
        characters: [],
        character: { id: 0, name: '', imageUrl: '', films: [], tvShows: [] },
      };
  }
};

export default charactersReducer;
