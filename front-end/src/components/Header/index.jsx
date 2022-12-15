import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';
import useLogout from '../../hooks/useLogout';
import Button from '../Button';

function Header({ homepage, homepageLabel, children, testId }) {
  const [{ name }] = useLocalStorage('user');
  const logout = useLogout();

  return (
    <div
      className="flex items-stretch justify-between align-middle
      h-px text-gray-400 font-bold
      bg-yellow-300 shadow-xl rounded px-20 pt-10 pb-10 mb-10"
    >
      <Link to={ homepage }>
        <Button
          className="text-white rounded-sm shadow-sm text-lg w-40 h-8"
          dataTestId={ `${testId.prefix}__element-navbar-link-${testId.sufix}` }
          type="button"
          name={ homepageLabel }
          text={ homepageLabel }
        />
      </Link>
      { children }
      <h2
        className="text-white text-lg w-40 h-8"
        data-testid={ `${testId.prefix}__element-navbar-user-full-name` }
      >
        { name }
      </h2>
      <Button
        className="bg-white hover:bg-gray-200 text-yellow-500
        font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        dataTestId={ `${testId.prefix}__element-navbar-link-logout` }
        type="button"
        name="logout"
        text="SAIR "
        onClick={ logout }
      />
    </div>
  );
}

Header.defaultProps = {
  children: undefined,
};

Header.propTypes = {
  testId: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    sufix: PropTypes.string.isRequired,
  }).isRequired,
  homepage: PropTypes.string.isRequired,
  homepageLabel: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Header;
