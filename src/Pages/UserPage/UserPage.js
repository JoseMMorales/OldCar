import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const login_URL = `url('/img/bg-user.jpg')`;

const UserPage = () => {
  const { data, setData } = useContext(Context);
  const userName = data.userLoginData.name;
  const userEmail = data.userLoginData.email;
  const userCity = data.userLoginData.city;
  const userAddress = data.userLoginData.address;
  const userPhone = data.userLoginData.phone;
  const userType = data.userLoginData.type;

  const deleteUser = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/user/delete`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);

        return response.json();
      })
      .then( res => console.log(res))
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
                deleteUser();
                setData(prevState => ({
                  ...prevState,
                  userLoginData:{ id: '', name: '', email: '', address: '', city: '', phone: '', type:'' },
                 }))
                localStorage.setItem('isAuthenticated', false);
                alert(`Tu cuenta ha sido eliminada, GRACIAS!!`);
              }}>
              <Link to={'/'}>Eliminar cuenta</Link>
            </li>
            <li
              className="user-list-element"
              onClick={() => {
                localStorage.setItem('isAuthenticated', false);
                setData(prevState => ({
                  ...prevState,
                  userLoginData:{ id: '', name: '', email: '', address: '', city: '', phone: '', type:'' },
                 }))
              }}>
              <Link to={'/'}>Salir</Link>
            </li>
          </ul>
        </div>
        <div className='user-content'>
          <h2 className='heading-details-user'>{userName}</h2>
          <div className='user-details'>
            <p className='details'><strong>Tipo:</strong> {userType}</p>
            <p className='details'><strong>Dirección:</strong> {userAddress}</p>
            <p className='details'><strong>Ciudad:</strong> {userCity}</p>
            <p className='details'><strong>Teléfono:</strong> {userPhone}</p>
            <p className='details'><strong>Email:</strong> {userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
