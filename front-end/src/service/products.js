import api from './api';
import { getToken } from '../storage/userStorage';

const config = {
  headers: {
    Authorization: getToken(),
  },

};

export const getAll = async () => {
  try {
    console.log(getToken());
    const products = await api.get('/products', config);
    return products;
  } catch (err) {
    return err;
  }
};

export const getImage = async (id) => {
  try {
    const image = await api.get(`/images/${id}`);
    return image;
  } catch (err) {
    return err;
  }
};
