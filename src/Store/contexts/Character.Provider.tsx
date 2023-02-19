import { FC, useReducer } from 'react';
import charactersReducer from '../reducer/disneyReducer';
import CharacterContext from './disneyApp.context';

interface CharacterProviderProps {
  children: JSX.Element;
}

const CharacterProvider: FC<CharacterProviderProps> = ({ children }) => {
  const [characters, dispatch] = useReducer(charactersReducer, {
    characters: [],
    character: {
      id: 0,
      name: '',
      imageUrl: '',
      films: [],
      tvShows: [],
    },
  });
  return (
    <CharacterContext.Provider value={{ characters, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
