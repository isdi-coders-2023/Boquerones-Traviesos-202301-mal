import { useEffect } from 'react';
import CharactersList from '../../components/CardList/CardList';
import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';
import Pagination from '../../components/Pagination/Pagination';
import './Home.css';

const Home = () => {
  const { data, getCharactersList } = useGetCharactersList();
  const { characters, homeCurrentPage } = data;

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);
  return (
    <>
      <h2 className="home__title">Characters</h2>
      <Pagination currentAppPage={homeCurrentPage} typeOfPagination={'home'} />
      <CharactersList characterList={characters} />
      <Pagination currentAppPage={homeCurrentPage} typeOfPagination={'home'} />
    </>
  );
};

export default Home;
