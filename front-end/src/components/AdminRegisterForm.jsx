import React, { useState } from 'react';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import GenericInput from './Input';
import SelectInput from './SelectInput';
import { postRegisterWithRole } from '../service/userRequests';

export default function AdminRegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [response, setResponse] = useState('');

  const options = [
    { name: 'Vendedor', id: 'seller' },
    { name: 'Consumidor', id: 'customer' },
    { name: 'Administrador', id: 'administrator' },
  ];
  const minName = 12;
  const emailPattern = /\S+@\S+\.\S+/;
  const minPassword = 6;

  const disabledBtn = () => !(
    name.length >= minName && emailPattern.test(email) && password.length >= minPassword);

  const register = async () => {
    const result = await postRegisterWithRole({ name, email, password, role });
    if (!result.data) {
      setResponse(result.response.data.message);
    }
  };
  return (
    <form>
      <GenericInput
        testId="admin_manage__input-name"
        type="name"
        input={ name }
        name="name"
        placeholder="Seu nome"
        setter={ setName }
        selector="name"
        fieldName="name"
      />

      <GenericInput
        testId="admin_manage__input-email"
        type="email"
        input={ email }
        name="email"
        placeholder="seu-email@site.com.br"
        setter={ setEmail }
        selector="email"
        fieldName="Email"
      />

      <GenericInput
        testId="admin_manage__input-password"
        type="password"
        input={ password }
        name="senha"
        placeholder="********"
        setter={ setPassword }
        selector="senha"
        fieldName="Senha"
      />
      <SelectInput
        fieldName="Tipo"
        name="Vendedor"
        nameField="name"
        value={ role }
        options={ options }
        setter={ setRole }
        testId="admin_manage__select-role"
        valueField="id"
      />
      <Button
        dataTestId="admin_manage__button-register"
        type="submit"
        name="register"
        disabled={ disabledBtn() }
        text="Cadastrar"
        onClick={ register }
      />
      <ErrorMessage
        dataTest="admin_manage__element-invalid_register"
        message={ response }
      />
    </form>
  );
}
