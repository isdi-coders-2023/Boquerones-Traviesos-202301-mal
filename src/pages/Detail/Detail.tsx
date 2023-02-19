import DisneyDetailCard from '../../components/DetailCard/DetailCard';
import './Detail.css';
import { useEffect } from 'react';
import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';

const Detail = () => {
  const { data, getCharacterDetail } = useGetCharactersList();

  useEffect(() => {
    getCharacterDetail();
  }, [getCharacterDetail]);

  return (
    <>
      <DisneyDetailCard character={data.character} />
    </>
  );
};

export default Detail;
