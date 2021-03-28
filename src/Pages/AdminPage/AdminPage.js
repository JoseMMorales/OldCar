import UsersTable from './Sections/UsersTable';
import CarsTable from './Sections/CarsTable';
import { Context } from '../../Context';

import {
  useState,
  useContext,
  useEffect,
  useRef } from 'react';

const Admin = () => {

  let usersRef = useRef();
  console.log('users', usersRef.current);

  let carsRef = useRef();
  console.log('cars', carsRef);

  const { getUserData } = useContext(Context);
  const [usersDisplay, setUsersDisplay] = useState(false);
  const [carsDisplay, setCarsDisplay] = useState(false);
  const [adminImgDisplay, setAdminImgDisplay] = useState(true);

  let isAuthenticated = localStorage.isAuthenticated;

  useEffect(() => {
    isAuthenticated && getUserData();
  }, []);

  const handleOnClick = () => {
    carsRef.current.getAdminCars();
    setUsersDisplay(false);
    setCarsDisplay(true);
    setAdminImgDisplay(false);
  };

  return (
    <div>
      <div className='admin-heading'>
        <ul className='list-navbar'>
          <li>
            <a
              className='list-admin-element'
              onClick={ () => {
                usersRef.current.getAdminUsers();
                setUsersDisplay(true);
                setCarsDisplay(false);
                setAdminImgDisplay(false);
              }}>
              Usuarios
            </a>
          </li>
          <li>
            <a
              className='list-admin-element'
              onClick={handleOnClick}>
              Anuncios
            </a>
          </li>
          <li>
            <a
              className='list-admin-element'
              onClick={() => {
                setUsersDisplay(false);
                setCarsDisplay(false);
                setAdminImgDisplay(true);
              }}>
              Cerrar
            </a>
          </li>
        </ul>
      </div>
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
          <UsersTable ref={usersRef} />
        }
        {
          carsDisplay &&
          <CarsTable ref={carsRef} />
        }
      </div>
    </div>
  )
};

export default Admin;
