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
  const [response, setResponse] = useState({});
  const [, setUser] = useLocalStorage('user', undefined);

  const minName = 12;
  const emailPattern = /\S+@\S+\.\S+/;
  const minPassword = 6;
  const history = useHistory();

  const disabledBtn = () => !(
    name.length >= minName && emailPattern.test(email) && password.length >= minPassword);

  const register = async (event) => {
    event.preventDefault();
    const { data } = await postRegister({ name, email, password });
    console.log(data);
    if (data.token) {
      const { token } = data;
      const userInfo = decryptToken(token);
      setUser({ ...userInfo, token });
      history.push('/customer/products');
      console.log(token);
    }
    setResponse(data);
  };

  return (
    <form>
      <h1>Cadastro</h1>
      <GenericInput
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
        dataTestId="common_register__button-register"
        type="submit"
        name="register"
        disabled={ disabledBtn() }
        text="Cadastrar"
        onClick={ register }
      />
      <ErrorMessage
        dataTest="common_register__element-invalid_register"
        message={ response.message }
      />
    </form>
  );
}

export default Register;
