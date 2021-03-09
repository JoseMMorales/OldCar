import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { FaCalendarAlt, FaGasPump } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import Search from '../../Components/Search/Search';
import { Button } from '../../Components/Generic';
import { Context } from '../../Context';
import { Link} from 'react-router-dom';

const search_URL = `url('/img/bg-search.jpg')`;

const SearchPage = () => {
  const { data, setData } = useContext(Context);
  const cars = data.searchCars;

  const brandURL = data.searchValues.brand;
  const modelURL = data.searchValues.model;
  const sellerURL = data.searchValues.seller;

  let URLCarSearch = '';

  if (brandURL) {
    URLCarSearch += `&brand=${brandURL}`;
  }

  if (modelURL) {
    URLCarSearch += `&model=${modelURL}`;
  }

  if (sellerURL) {
    URLCarSearch += `&seller=${sellerURL}`;
  }

  const URLCarSearchAmended = URLCarSearch.slice(1);

  const USER_URL = `http://localhost:8000/search?${URLCarSearchAmended}`;

  console.log(USER_URL);

  useEffect(() => {
    fetch(USER_URL)
      .then(response => {
          if (!response.ok)
              throw new Error("Something went wrong: " + response.status);

              return response.json();
      })
      .then(json => {
        setData(prevState => ({...prevState, searchCars: json}))
      })
      .catch(error => console.log(error));
  }, [brandURL, modelURL, sellerURL]);

  //Adding dots in integers received in data
  const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <div id='search'>
      <HeroSecondary
        src={search_URL}
        text='Busca tu sueño...'
        />
      <div className='container searchPage-container'>
        <Search showResults />
        <p className='search-results'>
          Resultados encontrados: {data.searchCars.length}
        </p>
        {
          cars.map((car, key) => {
            return (
              <div className='search-car-container' key={key}>
              <div className='search-car-image'>
                <img
                  className='img-responsive'
                  src= {`${car.image}`}
                  alt='Car Image'
                />
              </div>
              <div className='search-car-features'>
                <p className='dark-color'>
                  {car.brand} {car.model}
                </p>
                <p>
                  {`${numberWithDots(`${car.description}`)}`}
                </p>
                <p className='search-price-car main-color'>
                {`${numberWithDots(`${car.price}`)}€`}
                </p>
                <div className='search-additional-features'>
                  <ul className='search-tags'>
                    <li className='grey-color'>
                      <FaCalendarAlt />
                      {`${numberWithDots(`${ car.year}`)}`}
                    </li>
                    <li className='grey-color'>
                      <FaGasPump />
                      {`${numberWithDots(`${ car.km}`)}`}
                    </li>
                  </ul>
                  <Link to={`/Pages/DetailsPage/DetailsPage/${car.id}`}>
                    <Button
                      className='btn-search'
                      name='Detalles'
                    />
                  </Link>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchPage;
