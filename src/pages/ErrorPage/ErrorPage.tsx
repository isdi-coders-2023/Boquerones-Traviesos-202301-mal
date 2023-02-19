import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <div className="image_container">
          <img
            className="image_character"
            src="/assets/llama.png"
            alt="llama character"
          />
        </div>

        <div className="error_container">
          <h2 className="error_title">Oops!</h2>

          <p role={'paragraph'} className="error_title-description">
            Something went wrong. Please, try again.
          </p>
          <Link to={'/'}>
            <button className="button_home">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
