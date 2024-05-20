import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const NavLink = ({ to, children, active }) => {
  return (
    <Link
      className={classNames('rounded-md px-2 py-1 cursor-default', {
        'bg-secondary text-white font-semibold': active,
        'bg-inherit text-text font-normal cursor-pointer hover:bg-secondary hover:text-white':
          !active
      })}
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
