import React from 'react';
import { PropTypes } from 'prop-types';


function OrderDetailsTable({ products }) {
  return (
    <section>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
        {products.map((product, i) => (
            <tr key={ i }>
              <td
                data-testid= {`customer_products__element-order-table-item-number-${i}`}
              >
                {i + 1}
              </td>
              <td
                data-testid= {`customer_products__element-order-table-name-${i}`}
              >
                {product.name}
              </td>
              <td
                data-testid= {`customer_products__element-order-table-quantity-${i}`}
              >
                {product.quantity}
              </td>
              <td
                data-testid= {`customer_products__element-order-table-unit-price-${i}`}
              >
                R$
                {' '}
                {product.price}
              </td>
              <td
                data-testid= {`customer_products__element-order-table-sub-total-${i}`}
              >
                R$
                {' '}
                {product.price * product.quantity}
              </td>
            </tr> 
        ))
      }
      </table>
    </section>
  );
}

OrderDetailsTable.propTypes = {
  products: PropTypes. array,
}.isRequired;

export default OrderDetailsTable;
