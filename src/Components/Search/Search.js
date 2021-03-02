import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import { Select } from 'react-dropdown-select';
import { Button, Input } from '../Generic';

const Search = ( { pathName, showResults, className } ) => {
  const { data, setData } = useContext(Context);

  let searchHistory = useHistory();
  const handleSearch = () => searchHistory.push('/Pages/SearchPage/SearchPage');

  let [selectState, setSelectState] = useState(data.searchValues);

  //Handling change of values for context
  const handleChange = (value) => {
    if (value.length === 0) {
      setSelectState([]);
    } else {
      setSelectState(prevState => ({
        ...prevState,
        [value[0].name]: value[0].value
      }));
    }
  }

  //Update Context when SelectState Change
  useEffect(() => {
    setData(prevState => ({ ...prevState, searchValues: selectState }));
  }, [selectState]);

  //Reset Search with context when go to HOME
  useEffect(() => {
    pathName === '/Pages/Home/Home' && setSelectState([]);
  }, [])

  //States to clean the values up when click remove button
  const [brandsValue, setBrandsValue] = useState([]);
  const [modelsValue, setModelsValue] = useState([]);
  const [yearsValue, setYearsValue] = useState([]);
  const [kmsValue, setKmsValue] = useState([]);
  const [sellersValue, setSellersValue] = useState([]);
  const [pricesValue, setPricesValue] = useState([]);

  return (
    <>
      <div className={`search-container bg-light ${className}`}>
        <div className='history-search-container'>
          {
            showResults && (
              <>
                { Object.values(data.searchValues).map((value, key) => {
                    return (
                      value && <p className='search-values' key={key}>{value}</p>
                    )
                  })
                }
              </>
            )
          }
        </div>
        <div className='search-wrapper' key='search-wrapper'>
          <Select
            name='brands'
            className='brand-select grey-color'
            placeholder='Marca'
            values={brandsValue}
            onChange={(brandsValue) => {
              setBrandsValue(brandsValue)
              handleChange(brandsValue)
            }}
            options={data.select.brands}
          />
          <Select
            name='models'
            className='model-select grey-color'
            placeholder='Modelo'
            values={modelsValue}
            onChange={(modelsValue) => {
              setModelsValue(modelsValue)
              handleChange(modelsValue)
            }}
            options={data.select.models}
          />
          <Select
            name='sellers'
            className='seller-select grey-color'
            placeholder='Vendedor'
            values={sellersValue}
            onChange={(sellersValue) => {
              setSellersValue(sellersValue)
              handleChange(sellersValue)
            }}
            options={data.select.sellers}
          />
          <Input
            containerClassName='km-select'
            InputClassName='input-search'
            placeholder='Introduce Km'
            type='number'
          />
          <Input
            containerClassName='year-select'
            InputClassName='input-search'
            placeholder='Introduce Año'
            type='number'
          />
          <Input
            containerClassName='price-select'
            InputClassName='input-search'
            placeholder='Introduce Precio'
            type='number'
          />
          <div className='select-buttons'>
            <Button
              onClick={handleSearch}
              className='bn-filter btn total-width'
              name='Filtrar'
            />
            <Button
              className='btn-reset total-width'
              name='Borrar'
              onClick={() => {
                setBrandsValue([])
                setModelsValue([])
                setYearsValue([])
                setKmsValue([])
                setSellersValue([])
                setPricesValue([])
                handleChange([])
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;


