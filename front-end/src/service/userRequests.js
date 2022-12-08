import api from './api';

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user.token;
};

const config = {
  headers: {
    Authorization: getToken(),
  },
};

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
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getUsers() {
  try {
    const response = await api.get('/user', config);

    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteUser(id) {
  try {
    const response = await api.delete(`/user/${id}`, config);

    return response;
  } catch (error) {
    return error;
  }
}
