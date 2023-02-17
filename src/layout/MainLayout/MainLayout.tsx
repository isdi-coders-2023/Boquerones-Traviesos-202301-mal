import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import { MemoryRouter } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header className="header">
        <Navigation></Navigation>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
