import { useState, useEffect, useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Dropdown  from '../Dropdown/Dropdown';
import { Context } from '../../Context';

const Navbar = () => {
  const { isAuthenticated, scrollWithOffset } = useContext(Context);

  const [toggle, setToggle] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  let history = useHistory();

  //Dropdown toggle when clicking in the window
	const handleClick = () => history.push('/Pages/Home/Home#home');
	const handleToggle = () => setToggle(!toggle);

  //Scroll to section in homePage
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setCurrentScrollY(currentScrollY);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, true);
      return () => {
        window.removeEventListener('scroll', handleScroll, true)
      };
  }, []);

  return (
    <>
      <nav className='navbar bg-light dark-color'>
        <div className='brand-title' onClick={handleClick}>
          Old<span className='main-color'>Car</span>
        </div>
        <a
          className='toggle-button'
          onClick={handleToggle}>
          <span className={`bar total-width bg-dark ${toggle && 'active'}`}/>
          <span className={`bar total-width bg-dark ${toggle && 'active'}`}/>
          <span className={`bar total-width bg-dark ${toggle && 'active'}`}/>
        </a>
        <div className={`navbar-links ${toggle && 'open'}`}>
          <ul className='navbar-list'>
            <li className='li-navbar'>
              <NavHashLink
                className='nav-link dark-color'
                isActive={(match, location) =>
                  location.pathname === '/Pages/Home/Home'&&
                  currentScrollY < 500 && true
                }
                to='/Pages/Home/Home#home'
                scroll={el => scrollWithOffset(el, 80)}>
                Inicio
              </NavHashLink>
            </li>
            <li className='li-navbar'>
            <NavHashLink
                className='nav-link dark-color'
                isActive={(match, location) =>
                  location.pathname === '/Pages/Home/Home'&&
                  currentScrollY > 500 && currentScrollY < 1000 &&
                  true
                }
                smooth to='/Pages/Home/Home#about'
                scroll={el => scrollWithOffset(el, 80)}>
                Acerca de
              </NavHashLink>
            </li>
            <li className='li-navbar'>
            <NavHashLink
                className='nav-link dark-color'
                isActive={(match, location) =>
                  location.pathname === '/Pages/Home/Home'&&
                  currentScrollY > 1000 && true
                }
                smooth to='/Pages/Home/Home#contact'
                scroll={el => scrollWithOffset(el, 80)}>
                Contacto
              </NavHashLink>
            </li>
            <li className='li-navbar'>
              <NavLink
                className='nav-link dark-color'
                activeClassName='active'
                to='/Pages/SearchPage/SearchPage'>
                Buscar
              </NavLink>
            </li>
            <li className='li-navbar'>
              <NavLink
                className='nav-link dark-color'
                activeClassName='active'
                to={{
                  pathname: '/Pages/PublishPage/PublishPage',
                  state: {
                    user: isAuthenticated ? true : false,
                    CarPublished: isAuthenticated ? true : false
                  }
                }}>
                Publicar
              </NavLink>
            </li>
            {
              !isAuthenticated &&
                <li className='li-navbar'>
                  <NavLink
                    className='nav-link dark-color'
                    activeClassName='active'
                    to={'/Pages/LoginPage/LoginPage'}>
                    Login
                  </NavLink>
                </li>
            }
            {
              isAuthenticated &&
                <li className='li-navbar'>
                  <Dropdown />
                </li>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
