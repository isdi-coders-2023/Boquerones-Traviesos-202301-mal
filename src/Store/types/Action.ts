import Character from './character';

export enum ActionTypes {
  SHOW_CHARACTERS = 'showCharacters',
}

type DisneyAction = { type: ActionTypes.SHOW_CHARACTERS; payload: Character[] };

export default DisneyAction;
