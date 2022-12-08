import { getToken } from '../storage/userStorage';
import api from './api';

export async function userLogin({ email, password }) {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function getSellers() {
  try {
    const response = await api.get('/seller', {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
