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
    <div>
      <Link to={ homepage }>
        <Button
          dataTestId={ `${testId.prefix}__element-navbar-link-${testId.sufix}` }
          type="button"
          name={ homepageLabel }
          text={ homepageLabel }
        />
      </Link>
      { children }
      <h2 data-testid={ `${testId.prefix}__element-navbar-user-full-name` }>
        { name }
      </h2>
      <Button
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
