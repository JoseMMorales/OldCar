import { useContext, useState, useEffect } from 'react';
import { Select } from 'react-dropdown-select';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '../Generic';
import { Context } from '../../Context';

const Search = ( { pathName, showResults, className } ) => {
  const { data, setData } = useContext(Context);

  let searchHistory = useHistory();
  const handleSearch = () => searchHistory.push('/Pages/SearchPage/SearchPage');

  const initalValues = {brand:'', model:'', seller:'', km:'', year:'', price:''};

  let [selectState, setSelectState] = useState(initalValues);

  //Handling change of values for context
  const handleChange = (value) => {
    if (value.length === 0) {
      setSelectState(initalValues)
    } else {
      setSelectState(prevState => ({
        ...prevState,
        [value[0].name]: value[0].value
      }));
    }
  }

  //Handle Input change in Inputs
  const handleInput = e => {
		const { name, value } = e.target;
		setSelectState(prevState => ({
      ...prevState, [name]: value
    }));
	}

  //Update Context when SelectState Change
  useEffect(() => {
    setData(prevState => ({ ...prevState, searchValues: selectState }));
  }, [selectState]);

  //Reset Search with context when go to HOME
  useEffect(() => {
    pathName === '/Pages/Home/Home' &&
      setSelectState(initalValues);
  }, [])

  //States to clean the values up when click remove button
  const [brandsValue, setBrandsValue] = useState([]);
  const [modelsValue, setModelsValue] = useState([]);
  const [sellersValue, setSellersValue] = useState([]);

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
            name='brand'
            className='brand-select grey-color'
            placeholder='Marca'
            values={brandsValue}
            onChange={(brandsValue) => {
              setBrandsValue(brandsValue)
              handleChange(brandsValue)
            }}
            options={data.select.brand}
          />
          <Select
            name='model'
            className='model-select grey-color'
            placeholder='Modelo'
            values={modelsValue}
            onChange={(modelsValue) => {
              setModelsValue(modelsValue)
              handleChange(modelsValue)
            }}
            options={data.select.model}
          />
          <Select
            name='seller'
            className='seller-select grey-color'
            placeholder='Vendedor'
            values={sellersValue}
            onChange={(sellersValue) => {
              setSellersValue(sellersValue)
              handleChange(sellersValue)
            }}
            options={data.select.seller}
          />
          <Input
            containerClassName='km-select'
            InputClassName='input-search'
            placeholder='Km de 1 a 179.000'
            type='number'
            inputName='km'
            // labelName='Desde 1 a 179.000'
            value={selectState.km}
            labelClassName='label-input-name'
            onChange={handleInput}
          />
          <Input
            containerClassName='year-select'
            InputClassName='input-search'
            placeholder='Año de 1.919 a 1.985'
            type='number'
            inputName='year'
            // labelName='Desde 1.919 a 1.985'
            value={selectState.year}
            labelClassName='label-input-name'
            onChange={handleInput}
          />
          <Input
            containerClassName='price-select'
            InputClassName='input-search'
            placeholder='Precio de 5.500 a 280.000'
            type='number'
            inputName='price'
            // labelName='Desde 5.500 a 280.000'
            value={selectState.price}
            labelClassName='label-input-name'
            onChange={handleInput}
          />
          <div className='select-buttons'>
            {
               !showResults &&
                <Button
                  onClick={handleSearch}
                  className='bn-filter btn total-width'
                  name='Buscar'
                  value={selectState.name}
                />

            }
            <Button
              className='btn-reset total-width'
              name='Borrar'
              onClick={(e) => {
                e.preventDefault()
                setBrandsValue([])
                setBrandsValue([])
                setModelsValue([])
                setSellersValue([])
                setSelectState(initalValues)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;


