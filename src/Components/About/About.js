import { AiOutlineCar } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { GiHouseKeys } from 'react-icons/gi';
import { AiOutlineWallet } from 'react-icons/ai';

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
        <div className='brands'>
          <AiOutlineCar className='grey-light-color'/>
          <h6 className='dark-color'>Variedad</h6>
          <p>
            Contamos con marcas exclusivas nacionales como
            internacionales
          </p>
        </div>
        <div className='support'>
          <AiOutlineLike className='grey-light-color'/>
          <h6 className='dark-color'>Calidad</h6>
          <p>
            Todos nuestros coches estan bajo un exhaustivo control de
            calidad
          </p>
        </div>
        <div className='dealership'>
          <GiHouseKeys className='grey-light-color' />
          <h6 className='dark-color'>Concesión</h6>
          <p>
            Concesionarios y propietarios autorizados a la venta por
            OldCar
          </p>
        </div>
        <div className='affordable'>
          <AiOutlineWallet className='grey-light-color' />
          <h6 className='dark-color'>Asequible</h6>
          <p>
            Precios por debajo del mercado para que sea mas
            económico y atractivo
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
