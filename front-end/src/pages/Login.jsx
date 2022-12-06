import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  return (
    <form>
      <GenericInput
        testId="common_login__input-email"
        type="email"
        input={ email }
        name="email"
        placeholder="example@example.com"
        setter={ setEmail }
        fieldName="Email:"
        selector="email"
      />

      <GenericInput
        testId="common_login__input-password"
        type="password"
        input={ password }
        name="password"
        placeholder="******"
        setter={ setPassword }
        fieldName="Password:"
        selector="password"
      />

      <Button
        dataTestId="common_login__button-login"
        type="submit"
        name="login"
        disabled={ disabledBtn() }
        text="Login"
      />
      <Link to="/register">
        <Button
          dataTestId="common_login__button-register"
          type="submit"
          name="register"
          text="Ainda não tenho conta"
        />
      </Link>
    </form>
  );
}

export default Login;
