import { createContext, Dispatch } from 'react';
import DisneyAction from '../types/Action';
import Character from '../types/character';

interface DisneyAppContextStructure {
  characters: Character[];
  dispatch: Dispatch<DisneyAction>;
}

const CharacterContext = createContext<DisneyAppContextStructure>({
  characters: [],
  dispatch: () => {},
});

export default CharacterContext;
