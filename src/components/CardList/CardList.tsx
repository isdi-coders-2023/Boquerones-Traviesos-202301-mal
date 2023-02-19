import { FC } from 'react';
import Character from '../../Store/types/character';
import DisneyCard from '../Card/Card';
import './CardList.css';

interface CharactersListProps {
  characterList: Character[];
}

const CharactersList: FC<CharactersListProps> = ({ characterList }) => {
  return (
    <ul className="character-list">
      {characterList.map((character: Character) => (
        <DisneyCard key={character.id} character={character} />
      ))}
    </ul>
  );
};

export default CharactersList;
