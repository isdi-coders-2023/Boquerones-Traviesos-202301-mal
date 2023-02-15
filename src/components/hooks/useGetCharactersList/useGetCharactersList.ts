import { useContext } from 'react';
import getDisneyCharacters from '../../../API/getDisneyCharacters';
import CharacterContext from '../../../Store/contexts/disneyApp.context';
import { ActionTypes } from '../../../Store/types/Action';

const useGetCharactersList = () => {
  const { characters, dispatch } = useContext(CharacterContext);

  const getCharactersList = async () => {
    const characterList = await getDisneyCharacters();
    const showCharactersAction = {
      type: ActionTypes.SHOW_CHARACTERS,
      payload: characterList,
    };
    dispatch(showCharactersAction);
  };

  return { characters, getCharactersList };
};

export default useGetCharactersList;
