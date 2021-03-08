import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Link } from 'react-router-dom';

const login_URL = `url('/img/bg-user.jpg')`;

const UserPage = () => {

  const id = 63;

  const deleteUser = (id) => {
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/user/delete/${id}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);

        return response.json();
      })
      .then( res => {
        console.log(`La cuenta ${res.message} ha sido eliminada`);
      })
      .catch( e => console.log(e));
  };

  return (
    <div id='user'>
      <HeroSecondary
        src={login_URL}
        text='Sitio usuario OldCar'
      />
      <div className="user-container">
        <div className="user-sidebar">
          <ul className='user-list'>
            <li className="user-list-element">
              <Link to={'/Pages/EditPage/EditPage'}>Perfil</Link>
            </li>
            <li className="user-list-element">Favoritos</li>
            <li
              className="user-list-element"
              onClick={() => {
                deleteUser(id);
                localStorage.setItem('isAuthenticated', false);
                alert(`Tu cuenta ha sido eliminada, GRACIAS!!`);
              }}>
              <Link to={'/'}>Eliminar cuenta</Link>
            </li>
            <li
              className="user-list-element"
              onClick={() => {
                localStorage.setItem('isAuthenticated', false);
              }}>
              <Link to={'/'}>Salir</Link>
            </li>
          </ul>
        </div>
        <div className='user-content'>
          <h1>Perfil Jose</h1>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
