import React from 'react';
import AdminRegisterForm from '../components/AdminRegisterForm';
import AdminTable from '../components/AdminTable';

// import HeaderAdmin from '../components/HeaderAdmin';

export default function AdminManage() {
  return (
    <div>
      {/* <HeaderAdmin /> */}
      <AdminRegisterForm />
      <AdminTable />
    </div>
  );
}
