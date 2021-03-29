import { useState, useContext, useEffect } from 'react';
import { AdminNav, CarsTable, UsersTable } from './Sections';
import { Context } from '../../Context';

const AdminPage = () => {
  const { getUserData } = useContext(Context);
  const [usersDisplay, setUsersDisplay] = useState(false);
  const [carsDisplay, setCarsDisplay] = useState(false);
  const [users, setUsers] = useState({});
  const [cars, setCars] = useState({});
  const [adminImgDisplay, setAdminImgDisplay] = useState(true);

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
      .then( res => {
        setUsers(res)
      })
      .catch( e => console.log(e));
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

  return (
    <div>
      <AdminNav
        getAdminUsers={getAdminUsers}
        getAdminCars={getAdminCars}
        setUsersDisplay={setUsersDisplay}
        setCarsDisplay={setCarsDisplay}
        setAdminImgDisplay={setAdminImgDisplay}
      />
      {
        adminImgDisplay &&
        <div className='image-admin-container'>
          <h2 className='image-admin-header'>
            Elige una opción para visualizar
            Old<span className='main-color'>Car</span> data
          </h2>
          <img
            src='/img/adminGif.gif'
            alt='admin-gif'
            className='image-admin'
          />
        </div>
      }
      <div className='admin-content'>
        {
          usersDisplay &&
          <UsersTable
            getAdminUsers={getAdminUsers}
            users={users}
          />
        }
        {
          carsDisplay &&
          <CarsTable
            getAdminCars={getAdminCars}
            cars={cars}
          />
        }
      </div>
    </div>
  )
};

export default AdminPage;
