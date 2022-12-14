import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';
import { userLogin } from '../service/requests';
import ErrorMessage from '../components/ErrorMessage';
import useLocalStorage from '../hooks/useLocalStorage';
import decryptToken from '../utils/decryptToken';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [response, setResponse] = useState({});
  const history = useHistory();
  const [user, setUser] = useLocalStorage('user', undefined);
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  const handleButton = async (e) => {
    e.preventDefault();
    const { data } = await userLogin({ email, password });
    if (data.token) {
      const { token } = data;
      const userInfo = decryptToken(token);
      setUser({ ...userInfo, token });
    } else {
      setResponse(data);
    }
  };

  useEffect(() => {
    const loginRedirect = (role) => {
      switch (role) {
      case 'customer':
        history.push('/customer/products');
        break;

      case 'seller':
        history.push('/seller/orders');
        break;

      case 'administrator':
        history.push('/admin/manage');
        break;

      default:
        break;
      }
    };

    if (user) {
      loginRedirect(user.role);
    }
  }, [user, history]);

  return (
    <div className="grid h-screen place-items-center bg-gray-300">
      <form className="bg-yellow-300 shadow-xl rounded px-20 pt-20 pb-20 mb-10">
        <GenericInput
          className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-400 leading-tight"
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
          className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-400 leading-tight "
          testId="common_login__input-password"
          type="password"
          input={ password }
          name="password"
          placeholder="******"
          setter={ setPassword }
          fieldName="Password:"
          selector="password"
        />
        <div className="flex items-center justify-between">
          <Button
            className="bg-white hover:bg-gray-200 text-yellow-500
            font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            dataTestId="common_login__button-login"
            type="submit"
            name="login"
            onClick={ handleButton }
            disabled={ disabledBtn() }
            text="Login"
          />
          <Link to="/register">
            <Button
              className="inline-block align-baseline font-bold py-2 px-4 ml-5
              text-white hover:text-yellow-500 hover:bg-white rounded"
              dataTestId="common_login__button-register"
              type="submit"
              name="register"
              text="Ainda não tenho conta"
            />
          </Link>

        </div>
        <ErrorMessage
          className="inline-block align-baseline font-bold text-sm
          text-gray-400 mt-5"
          dataTest="common_login__element-invalid-email"
          message={ response.message }
        />
      </form>
    </div>
  );
}

export default Login;
