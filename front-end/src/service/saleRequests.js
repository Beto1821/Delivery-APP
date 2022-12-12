import { getToken } from '../storage/userStorage';
import api from './api';

export async function placeOrder(
  { sellerId, address, number },
  { products, totalPrice },
) {
  try {
    console.log(products);
    const response = await api.post(
      '/sales',
      {
        sellerId,
        deliveryAddress: address,
        deliveryNumber: number,
        totalPrice,
        products: Object.values(products),
      },
      {
        headers: {
          Authorization: getToken(),
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export async function getSale(id) {
  try {
    const response = await api.get(`/sales/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function markSaleAs(status, id) {
  try {
    const response = await api.put(`/sales/${id}/${status}`, {}, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
}
