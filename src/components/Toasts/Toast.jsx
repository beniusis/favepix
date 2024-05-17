import PropTypes from 'prop-types';
import { Icon } from './Icon';
import classNames from 'classnames';
import { useToast } from '@/stores';

export const Toast = ({ message, status, id }) => {
  const removeToast = useToast((state) => state.removeToast);

  return (
    <div
      className={classNames(
        'flex max-w-fit items-center justify-center gap-2 rounded p-2 animate-enter z-10',
        {
          'bg-green-100': status === 'success',
          'bg-yellow-100': status === 'warning',
          'bg-red-100': status === 'error'
        }
      )}
    >
      <Icon status={status} />
      <div
        className={classNames('text-base font-semibold cursor-default', {
          'text-green-500': status === 'success',
          'text-yellow-500': status === 'warning',
          'text-red-500': status === 'error'
        })}
      >
        {message}
      </div>
      <svg
        className={classNames('cursor-pointer rounded-md transition-all duration-500 ease-out', {
          'fill-green-500 hover:bg-green-200': status === 'success',
          'fill-yellow-500 hover:bg-yellow-200': status === 'warning',
          'fill-red-500 hover:bg-red-200': status === 'error'
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => removeToast(id)}
      >
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
      </svg>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
