import Character from './character';

interface DataStructure {
  characters: Character[];
  favourites: Character[];
  homeCurrentPage: number;
  favouritesCurrentPage: number;
  homeOffset: number;
  favouritesOffset: number;
}

export default DataStructure;
