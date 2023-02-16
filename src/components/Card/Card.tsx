import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Card.css';
import { FC } from 'react';
import Character from '../../Store/types/character';
import { Link } from 'react-router-dom';

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

      <div className="info-container">
        <p className="card__character-title">{character.name}</p>
        <div className="button-container">
          <button className="button-container__heart">
            <FontAwesomeIcon icon={regular('heart')} />
          </button>
          <Link to={'/detail'}>
            <button className="button-container__plus">
              <FontAwesomeIcon icon={solid('plus')} />
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default DisneyCard;
