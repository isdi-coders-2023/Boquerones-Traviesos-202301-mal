import { createContext, Dispatch } from 'react';
import DisneyAction from '../types/Action';
import Character from '../types/character';

interface DisneyAppContextStructure {
  characters: { characters: Character[]; character: Character };
  dispatch: Dispatch<DisneyAction>;
}

const CharacterContext = createContext<DisneyAppContextStructure>({
  characters: {
    characters: [],
    character: {
      id: 0,
      name: '',
      imageUrl: '',
      films: [],
      tvShows: [],
    },
  },
  dispatch: () => {},
});

export default CharacterContext;
