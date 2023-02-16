import { useEffect } from 'react';
import './App.css';
import CharactersList from './components/CardList/CardList';
import useGetCharactersList from './components/hooks/useGetCharactersList/useGetCharactersList';

function App() {
  const { characters, getCharactersList } = useGetCharactersList();

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  return (
    <>
      <CharactersList characterList={characters} />
    </>
  );
}

export default App;
