import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Card.css';
import picture from './mickey-mouse.png';

const DisneyCard = () => {
  return (
    <li className="card-container">
      <div className="img-container">
        <img className="img-container__img" src={picture} alt="foto"></img>
      </div>
      <p className="card__character-title">Mickey Mouse</p>
      <ul className="card__character-films-list">
        <p className="character-films__title">Films</p>
        <li className="character-films__movies">"Who Framed Roger Rabbit"</li>
      </ul>
      <ul className="card__character-show-list">
        <p className="character-show-list__title">TV Shows</p>
        <li className="character-show-list__series">
          "Who Framed Roger Rabbit"
        </li>
      </ul>
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
