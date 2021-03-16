import { Button, DetailParagraph } from '../../Components/Generic';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';

const CarDetails = ({ car }) => {
  const { data, setData } = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(window.localStorage.getItem('isAuthenticated'));
  }, [])

  //Adding dots in integers received in data
  const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const handlefavourite = (carId) => {
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
      .then(
        res => {
          console.log(res)
          if (res.idCar === 0) {
            alert("Coche repetido en favoritos, añade otro a tu lista");
          } else {
            let newCar = res;

            setData(prevState => ({
              ...prevState,
              favourites: [...prevState.favourites, newCar]
            }));
            alert("Coche añadido a favoritos");
          }
        })
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
        isAuthenticated &&
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
