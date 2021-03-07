import { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';
import { Dropdown } from '../Generic';

const Navbar = () => {

  window.onstorage = () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem('isAuthenticated')));
  };

  window.addEventListener('storage', () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem('isAuthenticated')));
  });


  const [toggle, setToggle] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  let history = useHistory();

  //Dropdown toggle when clicking in the window
	const handleClick = () => history.push('/Pages/Home/Home#home');
	const handleToggle = () => setToggle(!toggle);

  //Offset when scrolling from section
  const scrollWidthOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -80;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  //Scroll to section in homePage
  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setCurrentScrollY(currentScrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
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
                scroll={scrollWidthOffset}>
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
                scroll={scrollWidthOffset}>
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
                scroll={scrollWidthOffset}>
                Contacto
              </NavHashLink>
            </li>
            <li className='li-navbar'>
              <NavHashLink
                className='nav-link dark-color'
                to='/Pages/SearchPage/SearchPage#search'
                scroll={scrollWidthOffset}>
                Buscar
              </NavHashLink>
            </li>
            <li className='li-navbar'>
              <NavHashLink
                className='nav-link dark-color'
                to='/Pages/PublishPage/PublishPage#publish'
                scroll={scrollWidthOffset}>
                Publicar
              </NavHashLink>
            </li>
            {
              // isAuthenticated === 'false' &&
                <li className='li-navbar'>
                  <NavHashLink
                    className='nav-link dark-color'
                    to='/Pages/LoginPage/LoginPage#login'
                    scroll={scrollWidthOffset}>
                    Login
                  </NavHashLink>
                </li>
            }
            {/* {
              isAuthenticated === 'true' &&
                <li className='li-navbar'>
                  <Dropdown />
                </li>
            } */}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
