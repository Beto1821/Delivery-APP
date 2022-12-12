import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { deleteUser, getUsers } from '../service/userRequests';

function AdminTable({ update }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };
    getAllUsers();
  }, [update]);

  const handleDeleteBtn = async (id) => {
    await deleteUser(id);
    const { data } = await getUsers();
    setUsers(data);
  };

  const adjustRole = (role) => {
    switch (role) {
    case 'seller':
      return 'P. Vendedora';
    case 'customer':
      return 'Cliente';
    case 'administrator':
      return 'Administrador';
    default: break;
    }
  };

  const titles = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

  return (
    <div>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            {
              titles.map((title, index) => (
                <th key={ `${title}-${index}` }>
                  { title }
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={ user.email }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  {user.name}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {user.email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  { adjustRole(user.role) }
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    type="button"
                    onClick={ () => handleDeleteBtn(user.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

AdminTable.propTypes = {
  update: PropTypes.bool.isRequired,
};

export default AdminTable;
