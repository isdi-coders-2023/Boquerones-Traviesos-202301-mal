import DisneyAction, { ActionTypes } from '../types/Action';
import DataStructure from '../types/data';

const charactersReducer = (
  previousState: DataStructure,
  action: DisneyAction
): DataStructure => {
  const {
    homeCurrentPage,
    favouritesCurrentPage,
    homeOffset,
    favouritesOffset,
  } = previousState;

  switch (action.type) {
    case ActionTypes.SHOW_CHARACTERS:
      return { ...previousState, characters: [...action.payload] };

    case ActionTypes.HOME_NEXT_PAGE:
      return homeCurrentPage < 34
        ? {
            ...previousState,
            homeCurrentPage: homeCurrentPage + 1,
            homeOffset: homeOffset + 100,
          }
        : {
            ...previousState,
            homeCurrentPage: homeCurrentPage,
            homeOffset: homeOffset,
          };
    case ActionTypes.HOME_PREVIOUS_PAGE:
      return homeCurrentPage > 1
        ? {
            ...previousState,
            homeCurrentPage: homeCurrentPage - 1,
            homeOffset: homeOffset - 100,
          }
        : {
            ...previousState,
            homeCurrentPage: homeCurrentPage,
            homeOffset: homeOffset,
          };
    case ActionTypes.FAVOURITES_NEXT_PAGE:
      return favouritesOffset > 100
        ? {
            ...previousState,
            favouritesCurrentPage: favouritesCurrentPage + 1,
            favouritesOffset: favouritesOffset + 100,
          }
        : {
            ...previousState,
            favouritesCurrentPage: favouritesCurrentPage,
            favouritesOffset: favouritesOffset,
          };
    case ActionTypes.FAVOURITES_PREVIOUS_PAGE:
      return favouritesCurrentPage > 1
        ? {
            ...previousState,
            favouritesCurrentPage: favouritesCurrentPage - 1,
            favouritesOffset: favouritesOffset - 100,
          }
        : {
            ...previousState,
            favouritesCurrentPage: favouritesCurrentPage,
            favouritesOffset: favouritesOffset,
          };
    default:
      return { ...previousState };
  }
};

export default charactersReducer;
