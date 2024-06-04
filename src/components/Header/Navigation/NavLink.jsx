import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const NavLink = ({ to, children, active }) => {
  return (
    <Link
      className={classNames(
        'rounded-md px-2 py-1 cursor-default duration-300 ease-in-out text-text',
        {
          'bg-pexels-green font-semibold': active,
          'bg-inherit font-normal cursor-pointer hover:bg-pexels-green': !active
        }
      )}
      to={to}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
