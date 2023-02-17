import { FC } from 'react';
import Character from '../../Store/types/character';

interface DetailCardProps {
  character: Character;
}

const DisneyDetailCard: FC<DetailCardProps> = ({ character }) => {
  const filmsList = character.films.slice(0, 6);
  const showsList = character.tvShows.slice(0, 6);
  return (
    <div className="detail-container">
      <h3 className="detail__title">{character.name}</h3>
      <img alt="" className="detail__img" src={character.imageUrl} />
      <h4 className="detail__title-films">Films</h4>
      <ul className="detail__list-films">
        {filmsList.map((film) => (
          <li className="detail__list-item" key={film}>
            "{film}"
          </li>
        ))}
      </ul>
      <h4 className="detail__title-shows">TV Shows</h4>
      <ul className="detail__list-shows">
        {showsList.map((show) => (
          <li className="detail__list-item" key={show}>
            "{show}"
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisneyDetailCard;
