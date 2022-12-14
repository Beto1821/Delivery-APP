import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, dataTestId, type, name, disabled, onClick, text }) {
  return (
    <div className="flex items-center justify-between">
      <button
        className={ className }
        data-testid={ dataTestId }
        type={ type === 'submit' ? 'submit' : 'button' }
        name={ name }
        disabled={ disabled }
        onClick={ onClick }
      >
        {text}
      </button>

    </div>
  );
}

Button.defaultProps = {
  name: undefined,
  disabled: false,
  onClick: () => { },
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
