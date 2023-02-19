import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <>
      <div className="container">
        <div className="image_container">
          <img
            className="image_character"
            src="/assets/Stitch.png"
            alt="stitch character"
          />
        </div>

        <div className="error_container">
          <h2 className="error_title">Oops!</h2>

          <p role={'paragraph'} className="error_title-description">
            Sorry, the page you are looking for could not be found
          </p>
          <Link to={'/'}>
            <button className="button_home">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
