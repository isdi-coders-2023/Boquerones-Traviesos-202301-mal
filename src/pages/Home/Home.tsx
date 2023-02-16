import { useEffect } from 'react';
import CharactersList from '../../components/CardList/CardList';
import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';

const Home = () => {
  const { characters, getCharactersList } = useGetCharactersList();

  useEffect(() => {
    getCharactersList();
  }, []);
  return (
    <>
      <h2>Characters</h2>
      <CharactersList characterList={characters} />
    </>
  );
};

export default Home;
