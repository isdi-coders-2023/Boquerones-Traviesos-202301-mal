//import iconSearch from "/assets/search-icon.png"

const Navigation = () => {
  return (
    <div className="header-bar">
      <input type="checkbox" id="hamb-menu" />
      <label htmlFor="hamb-menu" className="header__logo-mickey">
        <img src="/assets/mickey-menu.png" alt="mickey menu logo" />
      </label>

      <div className="header__logo-container" id="header__logo-container">
        <img src="/assets/disney-icon.png" alt="disney cloud logo" />
      </div>

      <div className="mobile-search">
        <a className="mobile-search-icon" href="/search-character">
          {' '}
          <img src="/assets/search-icon.png" alt="search icon" />
        </a>
        <input
          className="mobile-search-input"
          type="text"
          placeholder="search characters..."
        />
      </div>

      <div className="mobile-nav">
        <ul className="mobile__nav_bar">
          <li className="mobile__nav_bar-list">
            {' '}
            <img width="20px" src="/assets/search-icon.png" alt="search icon" />
            <a href="/search">Search </a>
          </li>

          <li className="mobile__nav_bar-list">
            <img width="20px" src="/assets/hart.png" alt="hart icon" />
            <a href="/favourites">Favourites</a>
          </li>

          <li className="mobile__nav_bar-list">
            <img width="30px" src="/assets/castle-icon.png" alt="castle icon" />
            <a href="/parks">Parks</a>
          </li>

          <li className="mobile__nav_bar-list">
            <img
              width="30px"
              src="/assets/magical-variety-icon.png"
              alt="magical variety icon"
            />
            <a href="/parks">Create</a>
          </li>
        </ul>
      </div>

      <nav className="navigation-bar">
        <ul className="navigation-bar-list">
          <li className="navigation-input-search">
            {' '}
            <section className="a">
              <input
                className="navigation-input"
                type="text"
                placeholder="search characters..."
              />
              <a href="/search-character">
                {' '}
                <img src="/assets/search-icon.png" alt="search icon" />
              </a>
            </section>
          </li>
          <li className="navigation-list__favourites">
            {' '}
            <a href="/favourites">favourites</a>
          </li>
          <li className="navigation-list__parks">
            <a href="/parks">parks</a>
          </li>
          <li>
            {' '}
            <a href="/create-character">
              {' '}
              <img
                src="/assets/magical-variety-icon.png"
                alt="magical variety icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
