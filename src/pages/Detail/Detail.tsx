import DisneyDetailCard from '../../components/DetailCard/DetailCard';
import './Detail.css';
import { useEffect, useState } from 'react';
import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';

const Detail = () => {
  const { data, getCharacterDetail } = useGetCharactersList();
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
        <DisneyDetailCard character={data.character} />
      }
    </>
  );
};

export default Detail;
