import api from './api';
import { getToken } from '../storage/userStorage';

export const getAll = async () => {
  try {
    console.log(getToken());
    const products = await api.get('/products', {
      headers: {
        Authorization: getToken(),
      },
    });
    return products;
  } catch (err) {
    console.log(err);
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
