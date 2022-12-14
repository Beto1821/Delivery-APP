import React from 'react';
import PropTypes from 'prop-types';

function GenericInput({
  className,
  testId,
  type,
  input,
  name,
  placeholder,
  setter,
  fieldName }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor={ testId }>
        { fieldName }
        <input
          className={ className }
          id={ testId }
          data-testid={ testId }
          type={ type }
          value={ input }
          fieldname={ name }
          placeholder={ placeholder }
          onChange={ (event) => setter(event.target.value) }
        />
      </label>

    </div>
  );
}

GenericInput.defaultProps = {
  setter: () => {},
};

GenericInput.propTypes = {
  className: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setter: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default GenericInput;
