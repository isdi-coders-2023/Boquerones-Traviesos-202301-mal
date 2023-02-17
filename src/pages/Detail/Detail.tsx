import DisneyDetailCard from '../../components/DetailCard/DetailCard';
import './Detail.css';
import { useEffect, useState } from 'react';
import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';

const Detail = () => {
  const { characters, getCharacterDetail } = useGetCharactersList();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   setLoading(!loading);
    getCharacterDetail();
  }, [getCharacterDetail]);

  return (
    <>
      {
        /* {loading ? (
        <p>CARGANDO...</p>
      ) : ( */
        <DisneyDetailCard character={characters.character} />
      }
    </>
  );
};

export default Detail;
