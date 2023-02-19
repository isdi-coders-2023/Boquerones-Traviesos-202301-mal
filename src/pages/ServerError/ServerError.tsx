import { Link } from 'react-router-dom';
import './ServerError.css';

const ServerError = () => {
  return (
    <>
      <div className="container">
        <div className="image_container">
          <img
            className="image_grumpy"
            src="/assets/pngwing.png"
            alt="grumpy character"
          />
        </div>

        <div className="error_container">
          <h2 className="error_title">Oops!</h2>

          <p role={'paragraph'} className="error_title-description">
            There is a problem with the server. Please, try again.
          </p>
          <Link to={'/'}>
            <button className="button_home">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServerError;
