import PropTypes from 'prop-types';

function SelectInput({
  value,
  testId,
  name,
  setter,
  fieldName,
  options,
  valueField,
  nameField,
}) {
  return (
    <label htmlFor={ testId }>
      {fieldName}
      <select
        value={ value }
        id={ testId }
        data-testid={ testId }
        fieldname={ name }
        onChange={ (event) => setter(event.target.value) }
      >
        {options.map((obj, i) => (
          <option value={ obj[valueField] } key={ i }>
            {obj[nameField]}
          </option>
        ))}
      </select>
    </label>
  );
}

SelectInput.defaultProps = {
  value: undefined,
  setter: () => {},
};

SelectInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setter: PropTypes.func,
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  nameField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
};

export default SelectInput;
