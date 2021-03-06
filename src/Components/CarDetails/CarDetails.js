import { Button, DetailParagraph } from '../../Components/Generic';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';

//Adding dots in integers received in data
const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const CarDetails = ({ car }) => {
  const { data, setData } = useContext(Context);

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
        data.isAuthenticated &&
          <div className='favourite-car'>
            <Button
              className='btn-search'
              name='Añadir a favoritos'
            />
          </div>
      }
    </div>
  )
}

export default CarDetails;
