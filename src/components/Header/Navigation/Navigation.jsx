import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from './NavLink';

export const Navigation = () => {
  const currentLocation = useLocation();
  const isActiveRoute = (route) => currentLocation.pathname === route;

  return (
    <>
      <nav className="mt-10 flex items-center justify-center gap-2">
        <NavLink to="/" active={isActiveRoute('/')}>
          Home
        </NavLink>
        <NavLink to="/favorites" active={isActiveRoute('/favorites')}>
          Favorites
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
