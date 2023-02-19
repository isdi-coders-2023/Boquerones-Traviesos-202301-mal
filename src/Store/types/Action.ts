import Character from './character';

export enum ActionTypes {
  SHOW_CHARACTERS = 'showCharacters',
  SHOW_CHARACTER_DETAILS = 'showCharacterDetails',
}

type DisneyAction =
  | { type: ActionTypes.SHOW_CHARACTERS; payload: Character[] }
  | { type: ActionTypes.SHOW_CHARACTER_DETAILS; payload: Character };
export default DisneyAction;
