import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ dataTest, message }) {
  return (
    message && (
      <p
        data-testid={ dataTest }
      >
        { message }
      </p>
    )
  );
}

ErrorMessage.defaultProps = {
  message: '',
};

ErrorMessage.propTypes = {
  dataTest: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default ErrorMessage;
