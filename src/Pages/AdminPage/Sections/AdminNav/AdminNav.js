const AdminNav = ({
  getAdminUsers,
  getAdminCars,
  setUsersDisplay,
  setCarsDisplay,
  setAdminImgDisplay }) => {

  return (
    <div className='admin-heading'>
      <ul className='list-navbar'>
        <li>
          <a
            className='list-admin-element'
            onClick={ () => {
              getAdminUsers();
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
            onClick={ () => {
              getAdminCars();
              setUsersDisplay(false);
              setCarsDisplay(true);
              setAdminImgDisplay(false);
            }}>
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
  )
};

export default AdminNav;
