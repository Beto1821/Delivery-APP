import React, { useState } from 'react';
import AdminRegisterForm from '../components/AdminRegisterForm';
import AdminTable from '../components/AdminTable';

// import HeaderAdmin from '../components/HeaderAdmin';

export default function AdminManage() {
  const [update, setUpdate] = useState(false);
  console.log(update);

  return (
    <div>
      {/* <HeaderAdmin /> */}
      <AdminRegisterForm
        updateList={ () => setUpdate((prev) => !prev) }
      />
      <AdminTable
        update={ update }
      />
    </div>
  );
}
