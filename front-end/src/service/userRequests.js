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
