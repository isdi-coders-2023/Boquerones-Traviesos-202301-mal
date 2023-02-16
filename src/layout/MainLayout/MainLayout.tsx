import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <header className="header">DisneyCloud</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
