import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Context } from '../../Context';
import { useContext, useEffect } from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import CarDetails from '../../Components/CarDetails/CarDetails';
import SellerDetails from '../../Components/SellerDetails/SellerDetails';
import Insurance from '../../Components/Insurance/Insurance';
import ContactForm from '../../Components/ContactForm/ContactForm';

const details_URL = `url('/img/bg-detail.jpg')`;

const DetailsPage = (props) => {
  const { data, setData } = useContext(Context);
  const { id } = props.match.params;

  const USER_URL = `http://localhost:8000/cars/details/${id}`;

  useEffect(() => {
    fetch(USER_URL)
      .then(response => {
          if (!response.ok)
              throw new Error('Something went wrong: ' + response.status);

            return response.json();
      })
      .then(json => {
        setData(prevState => ({...prevState, detailsCar: json}))
      })
      .catch(error => console.log(error));
  }, [id]);

  //Adding dots in integers received in data
  const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <div id='details'>
      <HeroSecondary
        src={details_URL}
        text='Descubre los detalles'
      />
      {
        Object.values(data.detailsCar).map((car, key) => {
          return (
            <div className='container' key={key}>
              <div className='details-container'>
                <div className='heading-details'>
                  <div className='top-heading-details'>
                    <h1 className='title'>
                    {`${numberWithDots(`${ car.year}`)}`} {car.brand} {car.model}
                    </h1>
                    <h1 className='price main-color'>
                    {`${numberWithDots(`${ car.price}`)}`}€
                    </h1>
                  </div>
                  <p className='grey-color'>{`${numberWithDots(`${car.description}`)}`}</p>
                </div>
                <div className='main-details'>
                  <Carousel
                    mainImage={car.mainImage}
                    secondImage={car.secondImage}
                    thirdImage={car.thirdImage}
                    fourthImage={car.fourthImage}
                    fifthImage={car.fifthImage}
                  />
                  <CarDetails car={car} />
                </div>
                <div className='heading-details'>
                  <h1 className='title grey-color'>
                    Comentario del vendedor
                  </h1>
                  <p className='owner-paragraph'>
                  {`${numberWithDots(`${ car.sellerDescription}`)}`}
                  </p>
                </div>
                <div className='seller-details'>
                  <SellerDetails car={car}/>
                  <div className='contact-details'>
                    <h1 className='title grey-color'>
                      Contacta con el vendedor
                    </h1>
                    <ContactForm
                      className='form-marging'
                      sectionLocation='details'
                      id={id}
                    />
                  </div>
                </div>
                <Insurance />
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default DetailsPage;
