import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Character from '../../Store/types/character';
import './DetailCard.css';
import { Link } from 'react-router-dom';

interface DetailCardProps {
  character: Character;
}

const DisneyDetailCard: FC<DetailCardProps> = ({ character }) => {
  const filmsList = character.films.slice(0, 3);
  const showsList = character.tvShows.slice(0, 3);
  return (
    <div className="detail-container">
      <div className="arrow-container">
        <Link to={'/'}>
          <button className="arrow-button">
            <FontAwesomeIcon icon={solid('arrow-left')} />
          </button>
        </Link>
        <h3 className="detail__title">{character.name}</h3>
      </div>

      <img alt="" className="detail__img" src={character.imageUrl} />
      <div className="films__container">
        <p className="detail__title-films">Films:</p>
        <ul className="detail__list-films">
          {filmsList.map((film) => (
            <li className="detail__list-item" key={film}>
              "{film}"
            </li>
          ))}
        </ul>
      </div>
      <div className="shows__container">
        <p className="detail__title-shows">TV Shows:</p>
        <ul className="detail__list-shows">
          {showsList.map((show) => (
            <li className="detail__list-item" key={show}>
              "{show}"
            </li>
          ))}
        </ul>
      </div>
      <div className="button__container-heart">
        <button className="button-heart">
          <FontAwesomeIcon icon={regular('heart')} />
        </button>
      </div>
    </div>
  );
};

export default DisneyDetailCard;
