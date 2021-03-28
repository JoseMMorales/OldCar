import { AiOutlineCar } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { GiHouseKeys } from 'react-icons/gi';
import { AiOutlineWallet } from 'react-icons/ai';
import AboutDetail from '../../../../Components/AboutDetail/AboutDetail';

const About = () => {
  return (
    <div className='container'>
      <div className='about-container grey-color' id='about'>
        <div className='about-heading'>
          <span>Bienvenido a nuetra website</span>
          <h1>
            Old<span className='main-color'>Car</span>
          </h1>
          <div className='separator' />
          <p>
            ¡En OldCar puedes encontrar el coche clásico de tus
            sueños! Te ofrecemos todas las marcas y modelos y
            además, nuestros coches están sujetos a los estándares
            de calidad de OldCar más exigentes. Visita ahora nuestro
            catalógo online y descubre todas las características
            únicas de tu coche. Una vez lo hayas elegido, haz clic
            en 'Compra Coche' y podrás adquirir una de nuestras
            joyas.
          </p>
        </div>
        <AboutDetail
          className='brands'
          aboutIcon= {<AiOutlineCar className='grey-light-color' />}
          aboutDetailHeader='Variedad'
          aboutDetailParagraph='Contamos con marcas exclusivas nacionales como
          internacionales'
        />
        <AboutDetail
          className='support'
          aboutIcon= {<AiOutlineLike className='grey-light-color' />}
          aboutDetailHeader='Calidad'
          aboutDetailParagraph='Todos nuestros coches estan bajo un exhaustivo control de
          calidad'
        />
        <AboutDetail
          className='dealership'
          aboutIcon= {<GiHouseKeys className='grey-light-color' />}
          aboutDetailHeader='Concesión'
          aboutDetailParagraph='Concesionarios y propietarios autorizados a la venta por
          OldCar'
        />
        <AboutDetail
          className='affordable'
          aboutIcon= {<AiOutlineWallet className='grey-light-color' />}
          aboutDetailHeader='Asequible'
          aboutDetailParagraph='Precios por debajo del mercado para que sea mas
          económico y atractivo'
        />
      </div>
    </div>
  );
}

export default About;
