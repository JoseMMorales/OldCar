import { NavHashLink } from 'react-router-hash-link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context';
import { useContext } from 'react';

const Footer = () => {
  const { data, scrollWithOffset } = useContext(Context);
  const [linkURL, setLinkURL] = useState('')

  useEffect(() => {
      linkURL && window.open(linkURL, '_blank');
      setLinkURL('');
  }, [linkURL]);

  return (
    <>
      <footer className='bg-dark'>
        <div className='footer-top container light-color bg-dark'>
          <div className='footer-left'>
            <h5>
              Old <span className='main-color'>Car</span>
            </h5>
            <ul className='footer-links'>
              <li>
                <NavHashLink
                  className='light-color'
                  activeClassName='none'
                  to='/Pages/Home/Home#home'
                  scroll={el => scrollWithOffset(el, 80)}>
                  Inicio
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className='light-color'
                  activeClassName='none'
                  to='/Pages/Home/Home#about'
                  scroll={el => scrollWithOffset(el, 80)}>
                  Acerca de
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className='light-color'
                  activeClassName='none'
                  to='/Pages/Home/Home#contact'
                  scroll={el => scrollWithOffset(el, 80)}>
                  Contacto
                </NavHashLink>
              </li>
              <li>
                <NavLink
                  className='light-color'
                  activeClassName='none'
                  to= '/Pages/SearchPage/SearchPage'>
                  Buscar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='light-color'
                  activeClassName='none'
                  to= '/Pages/PublishPage/PublishPage'>
                  Publicar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='light-color'
                  activeClassName='none'
                  to='/Pages/LoginPage/LoginPage'>
                  Login
                </NavLink>
              </li>
            </ul>
            <ul className='social-list'>
              <li>
                <a onClick={() => setLinkURL(data.footerURL.linkedin)}
                  name='linkedin'
                  className='social-icon'>
                  <FaLinkedin className='hover grey-light-color' name='linkedin'/>
                </a>
              </li>
              <li>
                <a className='social-icon'
                  onClick={() => setLinkURL(data.footerURL.github)}
                  name='github'>
                  <FaGithubSquare className='hover grey-light-color' />
                </a>
              </li>
              <li>
                <a className='social-icon'
                  onClick={() => setLinkURL(data.footerURL.facebook)}
                  name='facebook'>
                  <FaFacebookSquare className = 'hover grey-light-color' />
                </a>
              </li>
              <li>
                <a className='social-icon'
                  onClick={() => setLinkURL(data.footerURL.twitter)}
                  name = 'twitter'>
                  <FaTwitterSquare className='hover grey-light-color' />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-right'>
            <h5>
              Old <span className='main-color'> Car </span>
              Website
            </h5>
            <p>
              OldCar website ha sido construida como proyecto final del FullStack Bootcamp en CodeSpace Academy(Malaga),
              todos los datos mostrados en la web son ficticios sin ningun tipo de venta o compra de los vehiculos en la web.
            </p>
          </div>
        </div>
        <div className='footer-bottom light-color'>
          <p>
            @2021 OldCars.All rights reserved.Built by
            <a onClick={() =>setLinkURL(data.footerURL.github)}
              className='additional-color'
              rel='nofollow'>
                 {` Jose MMorales`}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
