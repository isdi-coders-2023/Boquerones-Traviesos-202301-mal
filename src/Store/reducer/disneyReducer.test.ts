import { ActionTypes } from '../types/Action';
import Character from '../types/character';
import charactersReducer from './disneyReducer';

describe('Given a default case for my switch action.type', () => {
  test('When has not change by function useReducer, the state is not change', () => {
    const previousCharacters: Character[] = [];
    const updateAction = {
      type: 'default' as unknown as ActionTypes,
      payload: [],
    };
    const updateState = charactersReducer(previousCharacters, updateAction);
    expect(updateState).toEqual([]);
  });
});
