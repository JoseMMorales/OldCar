import { Insurance, Carousel, CarDetails, SellerDetails } from './Sections';
import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { useContext, useEffect } from 'react';
import { Context } from '../../Context';

const DetailsPage = (props) => {
  const { data, setData, getUserData, numberWithDots } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;
  const { id } = props.match.params;

  useEffect(() => {
    isAuthenticated && getUserData();
  }, [])

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

  return (
    <div id='details'>
      <HeroSecondary
        src={data.heroSecundaryURL.details_URL}
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
                      id={car.id}
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
