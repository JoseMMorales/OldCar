import { NavHashLink } from 'react-router-hash-link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const linkedin = 'https://www.linkedin.com/in/jose-m-369686b9/';
const github = 'https://github.com/JoseMMorales/';
const facebook = 'https://es-es.facebook.com/Codespaceacademy/';
const twitter = 'https://twitter.com/codespaceacade?lang=en/';

const Footer = () => {
  const [linkURL, setLinkURL] = useState('')

  useEffect(() => {
      linkURL && window.open(linkURL, '_blank');
      setLinkURL('');
  }, [linkURL]);

   //Offset when scrolling from section
   const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

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
                <NavHashLink
                  className='light-color'
                  activeClassName='none'
                  to= '/Pages/SearchPage/SearchPage#search'>
                  Buscar
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className='light-color'
                  activeClassName='none'
                  to= '/Pages/PublishPage/PublishPage#publish'>
                  Publicar
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  className='light-color'
                  activeClassName='none'
                  to='/Pages/LoginPage/LoginPage#login'>
                  Login
                </NavHashLink>
              </li>
            </ul>
            <ul className='social-list'>
              <li>
                <a onClick={() => setLinkURL(linkedin)}
                  name='linkedin'
                  className='social-icon'>
                  <FaLinkedin className='hover grey-light-color' name='linkedin'/>
                </a>
              </li>
              <li>
                <a className='social-icon'
                  onClick={() => setLinkURL(github)}
                  name='github'>
                  <FaGithubSquare className='hover grey-light-color' />
                </a>
              </li>
              <li>
                <a className='social-icon'
                  onClick={() => setLinkURL(facebook)}
                  name='facebook'>
                  <FaFacebookSquare className = 'hover grey-light-color' />
                </a>
              </li>
              <li>
                <a className='social-icon'
                  onClick={() => setLinkURL(twitter)}
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
            <a onClick={() =>setLinkURL(github)}
              className='additional-color'
              rel='nofollow'>
              Jose MMorales
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
