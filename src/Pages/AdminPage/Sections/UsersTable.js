import AdminTable from '../../../Components/AdminTable/AdminTable';

import {
  useState,
  forwardRef,
  useImperativeHandle } from 'react';

const UsersTable = forwardRef((props, ref) => {
  const userHeader =  [ 'ID', 'ESTADO', 'NOMBRE', 'EMAIL', 'DIRECCION', 'TLF', 'ROLE', 'TIPO', 'ELIMINAR'];
  const [users, setUsers] = useState({});

  useImperativeHandle(ref, () => ({
    getAdminUsers: getAdminUsers
  }));

  const getAdminUsers = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };
    fetch(`http://localhost:8000/admin/users`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then( res => {
        setUsers(res)
      })
      .catch( e => console.log(e));
  };

  const adminRemoveUser = (id) => {
    if (confirm('Está seguro de que quieres borrar al usuario? si confirmas todos los datos serán borrados...')) {
       const token = localStorage.getItem('UserToken');
      const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/admin/delete/user/${id}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(res => {
        res.code === 200 ?
        getAdminUsers() :
        alert('Ha habido un fallo, por favor inténtalo otra vez');
      })
      .catch(e => console.log(e));
    }
  };

  return (
    <>
      <AdminTable
        adminTitle='Usuarios'
        tHeadLoop={userHeader}
        tBodyLoop={users}
        onClickName={adminRemoveUser}
      />
    </>
  )
});

export default UsersTable;
