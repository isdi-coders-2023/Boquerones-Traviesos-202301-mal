import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Card.css';
import { FC } from 'react';
import Character from '../../Store/types/character';

interface DisneyCardProps {
  character: Character;
}
const DisneyCard: FC<DisneyCardProps> = ({ character }) => {
  return (
    <li className="card-container">
      <div className="img-container">
        <img
          className="img-container__img"
          src={character.imageUrl}
          alt=""
        ></img>
      </div>
      <p className="card__character-title">{character.name}</p>
      <div className="button-container">
        <button className="button-container__heart">
          <FontAwesomeIcon icon={regular('heart')} />
        </button>
        <button className="button-container__plus">
          <FontAwesomeIcon icon={solid('plus')} />
        </button>
      </div>
    </li>
  );
};

export default DisneyCard;
