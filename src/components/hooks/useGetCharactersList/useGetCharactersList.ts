import { useCallback, useContext } from 'react';
import getDisneyCharaterID from '../../../API/getDisneyCharacterId';
import getDisneyCharacters from '../../../API/getDisneyCharacters';
import CharacterContext from '../../../Store/contexts/disneyApp.context';
import DisneyAction, { ActionTypes } from '../../../Store/types/Action';
import { useParams } from 'react-router-dom';
const useGetCharactersList = () => {
  const { characters, dispatch } = useContext(CharacterContext);
  const { _id } = useParams();

  const getCharactersList = useCallback(async () => {
    const characterList = await getDisneyCharacters();

    const showCharactersAction: DisneyAction = {
      type: ActionTypes.SHOW_CHARACTERS,
      payload: characterList,
    };
    dispatch(showCharactersAction);
  }, [dispatch]);

  const getCharacterDetail = useCallback(async () => {
    const character = await getDisneyCharaterID(_id);

    const showCharacterDetailAction: DisneyAction = {
      type: ActionTypes.SHOW_CHARACTER_DETAILS,
      payload: character,
    };

    dispatch(showCharacterDetailAction);
  }, [_id, dispatch]);

  return { characters, getCharactersList, getCharacterDetail };
};

export default useGetCharactersList;
