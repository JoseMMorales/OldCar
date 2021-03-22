import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, NoResult } from '../../Components/Generic';
import { FaCalendarAlt, FaGasPump } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import Search from '../../Components/Search/Search';
import { Context } from '../../Context';
import { Link} from 'react-router-dom';

const SearchPage = () => {
  const { data, setData, getUserData, numberWithDots } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;
  const cars = data.searchCars;

  useEffect(() => {
    isAuthenticated && getUserData();
  }, [])

  const brandURL = data.searchValues.brand;
  const modelURL = data.searchValues.model;
  const sellerURL = data.searchValues.seller;
  const yearURL = data.searchValues.year;
  const kmURL = data.searchValues.km;
  const priceURL = data.searchValues.price;

  let URLCarSearch = '';

  sellerURL ? URLCarSearch += `&seller=${sellerURL}` : false;
  brandURL ? URLCarSearch += `&brand=${brandURL}` : false;
  modelURL ? URLCarSearch += `&model=${modelURL}` : false;
  priceURL ? URLCarSearch += `&price=${priceURL}` : false;
  yearURL ? URLCarSearch += `&year=${yearURL}` : false;
  kmURL ? URLCarSearch += `&km=${kmURL}` : false;

  const URLCarSearchAmended = URLCarSearch.slice(1);

  const USER_URL = `http://localhost:8000/cars/search?${URLCarSearchAmended}`;

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
  }, [brandURL, modelURL, sellerURL, yearURL, kmURL, priceURL]);

  return (
    <div id='search'>
      <HeroSecondary
        src={data.heroSecundaryURL.search_URL}
        text='Busca tu sueño...'
        />
      <div className='container searchPage-container'>
        <Search showResults />
        {
          data.searchCars.length === 0?  '' :
            <p className='search-results'>
              Resultados encontrados: {data.searchCars.length}
            </p>
        }
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
      {
        data.searchCars.length === 0 && <NoResult />
      }
    </div>
  )
}

export default SearchPage;
