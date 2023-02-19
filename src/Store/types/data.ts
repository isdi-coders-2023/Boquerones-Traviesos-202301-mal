import Character from './character';

interface DataStructure {
  character: Character;
  characters: Character[];
  favourites: Character[];
  homeCurrentPage: number;
  favouritesCurrentPage: number;
  homeOffset: number;
  favouritesOffset: number;
}

export default DataStructure;
