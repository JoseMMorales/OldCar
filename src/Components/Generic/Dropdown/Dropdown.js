import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState, useRef, useEffect, useContext } from 'react';
import { Context } from '../../../Context';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const { data, setData } = useContext(Context);

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
            <p className='name-profile'>Jose</p>
            <RiArrowDownSLine className={`arrow-profile ${active && 'arrow-visible'}`} />
            <RiArrowUpSLine className={`arrow-profile ${!active && 'arrow-visible'}`} />
        </button>
        <ul className={`dropdown-list ${active && 'active'}`}>
          <li className='profile-list-element bg-light'>
          <Link to={'/Pages/UserPage/UserPage'}>Ir a tu Perfil</Link>
          </li>
          <li
            className='profile-list-element bg-light'
            onClick={() => {
              window.localStorage.removeItem('isAuthenticated');
              setData(prevState => ({
                ...prevState,
                userLoginData:{ id: '', name: '', email: '', address: '', city: '', phone: '', seller:'' },
                published: [{idCar: '', brand: '', model: '', image: ''}]
              }))
            }}>
            <Link to={'/'}>Salir</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;
