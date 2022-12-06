import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';
import userLogin from '../service/requests';
import ErrorMessage from '../components/ErrorMessage';
import useLocalStorage from '../hooks/useLocalStorage';
import decryptToken from '../utils/decryptToken';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [response, setResponse] = useState({});
  const history = useHistory();
  const [, setUser] = useLocalStorage('user', undefined);
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  const loginRedirect = (role) => {
    switch (role) {
    case 'customer':
      history.push('/customer/products');
      break;

    case 'seller':
      history.push('/seller/orders/');
      break;

    case 'administrator':
      history.push('/admin/manage');
      break;

    default:
      break;
    }
  };

  const handleButton = async (e) => {
    e.preventDefault();
    const { data } = await userLogin({ email, password });
    if (data.token) {
      const { token } = data;
      const userInfo = decryptToken(token);
      setUser({ ...userInfo, token });
      loginRedirect(userInfo.role);
    } else {
      setResponse(data);
    }
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
        message={ response.message }
      />
    </form>
  );
}

export default Login;
