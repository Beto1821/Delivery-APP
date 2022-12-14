import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ className, dataTest, message }) {
  return (
    message && (
      <div className={ className }>
        <p
          data-testid={ dataTest }
        >
          { message }
        </p>
      </div>
    )
  );
}

ErrorMessage.defaultProps = {
  message: '',
};

ErrorMessage.propTypes = {
  className: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default ErrorMessage;
