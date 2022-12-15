import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import postRegister from '../service/userRequests';
import ErrorMessage from '../components/ErrorMessage';
import useLocalStorage from '../hooks/useLocalStorage';
import decryptToken from '../utils/decryptToken';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [, setUser] = useLocalStorage('user', undefined);

  const minName = 12;
  const emailPattern = /\S+@\S+\.\S+/;
  const minPassword = 6;
  const history = useHistory();

  const disabledBtn = () => !(
    name.length >= minName && emailPattern.test(email) && password.length >= minPassword);

  const register = async (event) => {
    event.preventDefault();
    const result = await postRegister({ name, email, password });

    if (!result.data) {
      setResponse(result.response.data.message);
    }
    const { token } = result.data;
    const userInfo = decryptToken(token);
    setUser({ ...userInfo, token });
    history.push('/customer/products');
  };

  return (
    <div className="grid h-screen place-items-center bg-gray-300">
      <form className="bg-yellow-300 shadow-xl rounded px-20 pt-20 pb-20 mb-10">
        <h1
          className="px-20 pb-10 font-xl text-2xl font-extrabold
          text-gray-400 leading-tight"
        >
          Cadastro
        </h1>
        <GenericInput
          className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-300"
          testId="common_register__input-name"
          type="name"
          input={ name }
          name="name"
          placeholder="Seu nome"
          setter={ setName }
          selector="name"
          fieldName="Nome"
        />

        <GenericInput
          className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-400 "
          testId="common_register__input-email"
          type="email"
          input={ email }
          name="email"
          placeholder="seu-email@site.com.br"
          setter={ setEmail }
          selector="email"
          fieldName="Email"
        />

        <GenericInput
          className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-400 leading-tight"
          testId="common_register__input-password"
          type="password"
          input={ password }
          name="senha"
          placeholder="********"
          setter={ setPassword }
          selector="senha"
          fieldName="Senha"
        />

        <Button
          className="inline-block align-baseline font-bold px-10 py-2 mt-5 ml-14
          text-yellow-500 bg-white rounded hover:bg-gray-200"
          dataTestId="common_register__button-register"
          type="submit"
          name="register"
          disabled={ disabledBtn() }
          text="Cadastrar"
          onClick={ register }
        />
        <ErrorMessage
          className="inline-block align-baseline font-bold text-sm
          text-gray-400 px-2 mt-5 ml-16"
          dataTest="common_register__element-invalid_register"
          message={ response }
        />
      </form>
    </div>
  );
}

export default Register;
