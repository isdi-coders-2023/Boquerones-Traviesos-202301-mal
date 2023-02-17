import DisneyDetailCard from '../../components/DetailCard/DetailCard';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getDisneyCharaterID from '../../API/getDisneyCharacterId';

const Detail = () => {
  const [character, updateCharacter] = useState<any>({});
  const { _id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDisneyCharacter = async () => {
      const character = await getDisneyCharaterID(_id);
      updateCharacter(character);
      setLoading(!loading);
    };
    getDisneyCharacter();
  }, [_id]);

  return (
    <>
      {loading ? (
        <p>CARGANDO...</p>
      ) : (
        <DisneyDetailCard character={character} />
      )}
    </>
  );
};

export default Detail;
