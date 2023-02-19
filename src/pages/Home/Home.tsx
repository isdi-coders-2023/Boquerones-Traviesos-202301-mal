import { useEffect } from 'react';
import CharactersList from '../../components/CardList/CardList';
import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';
import './Home.css';

const Home = () => {
  const { characters, getCharactersList } = useGetCharactersList();

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);
  return (
    <>
      <h2 className="home__title">Characters</h2>
      <CharactersList characterList={characters.characters} />
    </>
  );
};

export default Home;
