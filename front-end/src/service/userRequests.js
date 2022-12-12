import { getToken } from '../storage/userStorage';
import api from './api';

export default async function postRegister({ name, email, password }) {
  try {
    const response = await api.post('/register', {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function postRegisterWithRole({ name, email, password, role }) {
  try {
    const response = await api.post('/user', {
      name,
      email,
      password,
      role,
    }, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getUsers() {
  try {
    const response = await api.get('/user', {
      headers: {
        Authorization: getToken(),
      },
    });

    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteUser(id) {
  try {
    const response = await api.delete(`/user/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    return response;
  } catch (error) {
    return error;
  }
}
