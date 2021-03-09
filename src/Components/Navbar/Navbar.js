import { useState, useEffect, useContext } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import { Dropdown } from '../Generic';

const Navbar = () => {
  const { data, setData } = useContext(Context);

  const isAuthenticated =  localStorage.isAuthenticated;

  const [toggle, setToggle] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  let history = useHistory();

  //Dropdown toggle when clicking in the window
	const handleClick = () => history.push('/Pages/Home/Home#home');
	const handleToggle = () => setToggle(!toggle);

  //Offset when scrolling from section
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

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
              <NavHashLink
                className='nav-link dark-color'
                to='/Pages/SearchPage/SearchPage#search'>
                Buscar
              </NavHashLink>
            </li>
            <li className='li-navbar'>
              <NavHashLink
                className='nav-link dark-color'
                to='/Pages/PublishPage/PublishPage#publish'>
                Publicar
              </NavHashLink>
            </li>
            {
              !isAuthenticated &&
                <li className='li-navbar'>
                  <NavHashLink
                    className='nav-link dark-color'
                    to='/Pages/LoginPage/LoginPage#login'>
                    Login
                  </NavHashLink>
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
