import { useState, useContext, useEffect } from 'react';
import { Button } from '../../Components/Generic';
import { Context } from '../../Context';

const Admin = () => {
  const { getUserData } = useContext(Context);
  const userHeader =  [ 'ID', 'ACTIVE', 'NOMBRE', 'EMAIL', 'DIRECCION', 'TLF', 'ROLE', 'TIPO', 'ELIMINAR'];
  const carHeader =  [ 'ID', 'ACTIVE', 'MARCA', 'MODELO', 'AÑO', 'PRECIO', 'KM', 'USER', 'ELIMINAR'];
  const [users, setUsers] = useState({});
  const [cars, setCars] = useState({});

  let isAuthenticated = localStorage.isAuthenticated;

  useEffect(() => {
    isAuthenticated && getUserData();
  }, []);

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
      .then( res => setUsers(res))
      .catch( e => console.log(e));
  };

  const adminRemoveUser = (id) => {
    if (confirm("Está seguro de que quieres borrar al usuario? si confirmas todos los datos serán borrados...")) {
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
        alert("Ha habido un fallo, por favor inténtalo otra vez");
      })
      .catch(e => console.log(e));
    }
  };

  const getAdminCars = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };
    fetch(`http://localhost:8000/admin/cars`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then( res => setCars(res))
      .catch( e => console.log(e));
  };

  const adminRemoveCar = (id) => {
    if (confirm("Está seguro de que quieres borrar el coche? ")) {
      const token = localStorage.getItem('UserToken');
      const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/admin/delete/car/${id}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(res => {
        res.code === 200 ? getAdminCars() : alert("Ha habido un fallo, por favor inténtalo otra vez");
      })
      .catch(e => console.log(e));
    }
  }

  return (
    <div>
      <div>
        <ul className='list-navbar'>
          <li>
            <a
              className='list-admin-element'
              onClick={getAdminUsers}>
              Usuarios
            </a>
          </li>
          <li>
            <a
              className='list-admin-element'
              onClick={getAdminCars}>
              Anuncios
            </a>
          </li>
        </ul>
      </div>
      <div className='admin-container'>
        <h1 className='admin-title'>Administración de usuarios en Old<span className='main-color'>Car</span></h1>
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
                Object.values(users).map((user, key) => {
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
                          onClick={() =>adminRemoveUser(user.id)}
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
      <div className='admin-container'>
        <h1 className='admin-title'>Administración de coches en Old<span className='main-color'>Car</span></h1>
        <div className='table-container'>
          <table className='admin-table'>
            <thead>
              <tr>
                {
                  carHeader.map(header => {
                    return  <th key={header}>{header}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                Object.values(cars).map((car, key) => {
                  return (
                    <tr key={key}>
                      <td>{car.id}</td>
                      <td>
                        {
                          `${car.active === false ? 'No Activo' : 'Activo'}`
                        }
                      </td>
                      <td>{car.brand}</td>
                      <td>{car.model}</td>
                      <td>{car.year}</td>
                      <td>{car.price}</td>
                      <td>{car.km}</td>
                      <td>{car.user}</td>
                      <td>
                        <Button
                          className='btn-reset total-width'
                          name='Borrar'
                          onClick={() =>adminRemoveCar(car.id)}
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
    </div>
  )
}

export default Admin;
