import useGetCharactersList from '../../components/hooks/useGetCharactersList/useGetCharactersList';
import Pagination from '../../components/Pagination/Pagination';
import './Favorites.css';
const Favourites = () => {
  const { data } = useGetCharactersList();

  return (
    <>
      <h2 className="favourites-title">Favourites</h2>
      <Pagination
        currentAppPage={data.favouritesCurrentPage}
        typeOfPagination={'favourites'}
      />
      <div>
        <p>You haven't added any characters to your list of favourites yet!</p>
      </div>
      <Pagination
        currentAppPage={data.favouritesCurrentPage}
        typeOfPagination={'favourites'}
      />
    </>
  );
};

export default Favourites;
