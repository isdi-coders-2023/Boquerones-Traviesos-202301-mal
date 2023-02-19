import { useCallback, useContext } from 'react';
import getDisneyCharaterID from '../../../API/getDisneyCharacterId';
import getDisneyCharacters from '../../../API/getDisneyCharacters';
import CharacterContext from '../../../Store/contexts/disneyApp.context';
import DisneyAction, { ActionTypes } from '../../../Store/types/Action';
import { useParams } from 'react-router-dom';

const useGetCharactersList = () => {
  const { data, dispatch } = useContext(CharacterContext);
  const { _id } = useParams();

  const getCharactersList = useCallback(async () => {
    const allCharacters = await getDisneyCharacters();
    const newPageCharacters = allCharacters.slice(
      data.homeOffset,
      data.homeOffset + 100
    );

    const showCharactersAction: DisneyAction = {
      type: ActionTypes.SHOW_CHARACTERS,
      payload: newPageCharacters,
    };
    dispatch(showCharactersAction);
  }, [data.homeOffset, dispatch]);
  const getCharacterDetail = useCallback(async () => {
    const character = await getDisneyCharaterID(_id);

    const showCharacterDetailAction: DisneyAction = {
      type: ActionTypes.SHOW_CHARACTER_DETAILS,
      payload: character,
    };

    dispatch(showCharacterDetailAction);
  }, [_id, dispatch]);

  const homePagination = (direction: 'next' | 'prev') => {
    const nextPageAction: DisneyAction = {
      type: ActionTypes.HOME_NEXT_PAGE,
    };
    const previousPageAction: DisneyAction = {
      type: ActionTypes.HOME_PREVIOUS_PAGE,
    };
    direction === 'next'
      ? dispatch(nextPageAction)
      : dispatch(previousPageAction);
  };

  const favouritesPagination = (direction: 'next' | 'prev') => {
    const nextPageAction: DisneyAction = {
      type: ActionTypes.FAVOURITES_NEXT_PAGE,
    };
    const previousPageAction: DisneyAction = {
      type: ActionTypes.FAVOURITES_PREVIOUS_PAGE,
    };
    direction === 'next'
      ? dispatch(nextPageAction)
      : dispatch(previousPageAction);
  };

  return {
    data,
    getCharactersList,
    getCharacterDetail,
    homePagination,
    favouritesPagination,
  };
};

export default useGetCharactersList;
