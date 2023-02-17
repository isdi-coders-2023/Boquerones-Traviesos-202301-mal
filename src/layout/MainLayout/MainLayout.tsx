import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';

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
