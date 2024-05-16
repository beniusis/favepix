import PropTypes from 'prop-types';

export const Icon = ({ status }) => {
  if (status === 'success') {
    return (
      <svg className="fill-green-500" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
      </svg>
    );
  } else if (status === 'warning') {
    return (
      <svg className="fill-yellow-500" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z"></path>
      </svg>
    );
  } else {
    return (
      <svg className="fill-red-500" width="24" height="24" viewBox="0 0 24 24">
        <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
      </svg>
    );
  }
};

Icon.propTypes = {
  status: PropTypes.string.isRequired
};
