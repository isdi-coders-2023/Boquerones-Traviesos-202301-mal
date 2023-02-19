import { FC } from 'react';
import useGetCharactersList from '../hooks/useGetCharactersList/useGetCharactersList';
import './Pagination.css';

interface PaginationProps {
  currentAppPage: number;
  typeOfPagination: 'home' | 'favourites';
}

const Pagination: FC<PaginationProps> = ({
  currentAppPage,
  typeOfPagination,
}) => {
  const { homePagination, favouritesPagination } = useGetCharactersList();

  return (
    <div className="pagination-container" data-testid="pag-container">
      <button
        data-testid="button-left"
        className="pagination__left-arrow"
        onClick={() => {
          typeOfPagination === 'home'
            ? homePagination('prev')
            : favouritesPagination('prev');
        }}
      >
        <img
          className="left-arrow__img"
          src="/assets/image5right-arrow.png"
          alt="left page arrow"
        />
      </button>
      <p className="pagination__current-page" data-testid="current-page">
        {currentAppPage}
      </p>
      <button
        data-testid="button-right"
        className="pagination__right-arrow"
        onClick={() => {
          typeOfPagination === 'home'
            ? homePagination('next')
            : favouritesPagination('next');
        }}
      >
        <img
          className="right-arrow__img"
          src="/assets/image5right-arrow.png"
          alt="right page arrow"
        />
      </button>
    </div>
  );
};

export default Pagination;
