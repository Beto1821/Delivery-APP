import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';
import userLogin from '../service/requests';
import ErrorMessage from '../components/ErrorMessage';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [response, setResponse] = useState({});
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  const handleButton = async (e) => {
    e.preventDefault();
    const result = await userLogin({ email, password });
    setResponse(result);
    console.log(result);
  };

  return (
    <form>
      <GenericInput
        testId="common_login__input-email"
        type="email"
        input={ email }
        name="Login"
        placeholder="example@example.com"
        setter={ setEmail }
      />

      <GenericInput
        testId="common_login__input-password"
        type="password"
        input={ password }
        name="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
      />
      <Button
        dataTestId="common_login__button-login"
        type="submit"
        name="login"
        onClick={ handleButton }
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
      <ErrorMessage
        dataTest="common_login__element-invalid-email"
        message={ response.data?.message }
      />
    </form>
  );
}

export default Login;
