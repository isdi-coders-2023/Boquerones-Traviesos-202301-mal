import { createContext, Dispatch } from 'react';
import DisneyAction from '../types/Action';
import DataStructure from '../types/data';

interface DisneyAppContextStructure {
  data: DataStructure;
  dispatch: Dispatch<DisneyAction>;
}

const CharacterContext = createContext<DisneyAppContextStructure>({
  data: {
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
  },
  dispatch: () => {},
});

export default CharacterContext;
