import api from './api';

async function userLogin({ email, password }) {
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

async function getOrders() {
  try {
    const response = await api.get('/sales/history', {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('user')).token,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export {
  userLogin,
  getOrders,
};
