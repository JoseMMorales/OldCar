import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';

const login_URL = `url('/img/bg-user.jpg')`;

const UserPage = () => {
  return (
    <div id='user'>
      <HeroSecondary
        src={login_URL}
        text='Sitio usuario OldCar'
      />
      <div className="user-container">
        <div className="user-sidebar">
          <ul className='user-list'>
            <li className="user-list-element">Perfil</li>
            <li className="user-list-element">Favoritos</li>
            <li className="user-list-element">Salir</li>
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
