import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const currentLocation = useLocation();

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        className={classNames('rounded-md px-2 py-1', {
          'bg-secondary text-white font-semibold': currentLocation.pathname === '/',
          'bg-inherit text-text font-normal': currentLocation.pathname !== '/'
        })}
        to="/"
      >
        Home
      </Link>
      <Link
        className={classNames('rounded-md px-2 py-1', {
          'bg-secondary text-white font-semibold': currentLocation.pathname === '/favorites',
          'bg-inherit text-text font-normal': currentLocation.pathname !== '/favorites'
        })}
        to="/favorites"
      >
        Favorites
      </Link>
    </div>
  );
};
