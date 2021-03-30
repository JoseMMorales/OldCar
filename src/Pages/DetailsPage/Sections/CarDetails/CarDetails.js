import DetailParagraph from '../../../../Components/DetailParagraph/DetailParagraph';
import { Button } from '../../../../Components/Generic';
import { Context } from '../../../../Context';
import { useContext } from 'react';

const CarDetails = ({ car }) => {
  const { setData, numberWithDots, isAuthenticated } = useContext(Context);

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
  };

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
