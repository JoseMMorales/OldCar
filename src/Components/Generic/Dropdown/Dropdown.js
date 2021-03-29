import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState, useRef, useEffect, useContext } from 'react';
import { Context } from '../../../Context';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const { data, setData, isAdmin } = useContext(Context);
  const [userName, setUserName] = useState('');

  const name = data.userLoginData.name.split(' ')[0];

  const handleToggle = () => { setActive(!active) };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  useEffect(() => {
    setUserName(data.userLoginData.name.split(' ')[0]);
  }, []);

  return (
    <div className='profile-container bg-grey-Slight' ref={ref}>
      <div className='dropdown'>
        <button
          className='profile-box'
          onClick={handleToggle}>
            <img
              className='img-profile'
              src='/img/profileImg.png'
              alt='image_profile'
            />
            <p className='name-profile'>
              {name}
            </p>
            <RiArrowDownSLine className={`arrow-profile ${active && 'arrow-visible'}`} />
            <RiArrowUpSLine className={`arrow-profile ${!active && 'arrow-visible'}`} />
        </button>
        <ul className={`dropdown-list ${active && 'active'}`}>
          {
            isAdmin &&
            <li className='profile-list-element bg-light'>
               <Link className='dark-color' to={'/Pages/AdminPage/AdminPage'}>Ir a Admin</Link>
            </li>
          }
          <li className='profile-list-element bg-light'>
            <Link className='dark-color' to={'/Pages/UserPage/UserPage'}>Ir a tu Perfil</Link>
          </li>
          <li
            className='profile-list-element bg-light'
            onClick={() => {
              window.localStorage.clear();
              setData(prevState => ({
                ...prevState,
                userLoginData:{ id: '', name: '', email: '', address: '', city: '', phone: '', type:'' },
                published: []
              }))
            }}>
            <Link className='dark-color' to={'/'}>Salir</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;
