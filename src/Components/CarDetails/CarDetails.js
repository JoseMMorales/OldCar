import { Button, DetailParagraph } from '../../Components/Generic';
import { useState, useEffect } from 'react';

const CarDetails = ({ car }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(window.localStorage.getItem('isAuthenticated'));
  }, [])

  //Adding dots in integers received in data
  const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const handlefavourite = (carId) => {
    console.log("get here");
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`}
    };

    fetch(`http://localhost:8000/addFavourite/${carId}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);

        return response.json();
      })
      .then( res => console.log(res))
      .catch( e => console.log(e));
  }

  return (
    <div className='car-description'>
      <h3 className='heading-description'>DESCRIPTION</h3>
      <DetailParagraph
        text='marca:'
        detail= {car.brand}
      />
      <DetailParagraph
        text='año:'
        detail= {`${numberWithDots(`${ car.year}`)}`}
      />
      <DetailParagraph
        text='modelo:'
        detail= {car.model}
      />
      <DetailParagraph
        text='km:'
        detail= {`${numberWithDots(`${ car.km}`)}`}
      />
      <DetailParagraph
        text='Vendedor:'
        detail= {car.seller}
      />
      <DetailParagraph
        text='Precio:'
        detail= {`${numberWithDots(`${ car.price}`)}€`}
      />
      {
        isAuthenticated === 'true' &&
          <div className='favourite-car'>
            <Button
              className='btn-search'
              name='Añadir a favoritos'
              onClick={() => handlefavourite(car.id)}
            />
          </div>
      }
    </div>
  )
}

export default CarDetails;
