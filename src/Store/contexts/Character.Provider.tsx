import { FC, useReducer } from 'react';
import charactersReducer from '../reducer/disneyReducer';
import CharacterContext from './disneyApp.context';

interface CharacterProviderProps {
  children: JSX.Element;
}

const CharacterProvider: FC<CharacterProviderProps> = ({ children }) => {
  const [data, dispatch] = useReducer(charactersReducer, {
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
  return (
    <CharacterContext.Provider value={{ data, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
