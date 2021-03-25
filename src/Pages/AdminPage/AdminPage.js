import { useState, useContext, useEffect } from 'react';
import { Button } from '../../Components/Generic';
import { Context } from '../../Context';

const Admin = () => {
  const { getUserData } = useContext(Context);
  const userHeader =  [ 'ID', 'ACTIVE', 'NOMBRE', 'EMAIL', 'DIRECCION', 'TLF', 'ROLE', 'TIPO', 'ELIMINAR'];
  const [headers, setHeaders] = useState({});

  const isAuthenticated =  localStorage.isAuthenticated;

  useEffect(() => {
    // console.log("here");
    isAuthenticated && getUserData();
  }, [])

  const getUsers = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    fetch(`http://localhost:8000/users`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then( res =>setHeaders(res))
      .catch( e => console.log(e))
  }

  return (
    <div>
      <div>
        <ul className='list-navbar'>
          <li>
            <a
              className='list-admin-element'
              onClick={getUsers}>
              Usuarios
            </a>
          </li>
          <li>
            <a
              className='list-admin-element'>
              Anuncios
            </a>
          </li>
        </ul>
      </div>
      <h1 className='admin-title'>Borrar Usuarios en Old<span className='main-color'>Car</span></h1>
      <div className='table-container'>
        <table className='admin-table'>
          <thead>
            <tr>
              {
                userHeader.map(header => {
                  return  <th key={header}>{header}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              Object.values(headers).map((user, key) => {
                return (
                  <tr key={key}>
                    <td>{user.id}</td>
                    <td>
                      {
                        `${user.active === false ? 'No Activo' : 'Activo'}`
                      }
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>{user.roles}</td>
                    <td>{user.type}</td>
                    <td>
                      <Button
                        className='btn-reset total-width'
                        name='Borrar'
                      />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin;
