import { useContext, useState, useEffect } from 'react';
import { Select } from 'react-dropdown-select';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '../Generic';
import { Context } from '../../Context';

import {
  isValidKm,
  isValidAnno,
  isValidPrice } from '../../Utils/FormValidations';

const Search = ( { pathName, showResults, className } ) => {
  const { data, setData, numberWithDots } = useContext(Context);

  let searchHistory = useHistory();
  const handleSearch = () => searchHistory.push('/Pages/SearchPage/SearchPage');

  const initalValues = { brand:'', model:'', seller:'', km:'', year:'', price:'' };

  let [selectState, setSelectState] = useState(data.searchValues);
  let [models, setModels] = useState({name: 'model', value: '', label: ''});

  //Dinamic options in Select Brand/Model from DB
  const MODEL_URL = `http://localhost:8000/select/model?brand=${selectState.brand}`;

  useEffect(() => {
    fetch(MODEL_URL)
      .then(response => {
          if (!response.ok)
            throw new Error("Something went wrong: " + response.status);
          return response.json();
      })
      .then(json => setModels(json))
      .catch(error => console.log(error));
  }, [selectState.brand]);

  //Handling change of values for context
  const handleChangeBrand = (value) => {
    if (value.length === 0) {
      setSelectState(prevState => ({ ...prevState, brand: ''}));
    } else {
      setSelectState(prevState => ({ ...prevState, [value[0].name]: value[0].value }));
    }
  }

  const handleChangeModel = (value) => {
    if (value.length === 0) {
      setSelectState(prevState => ({ ...prevState, model: ''}));
    } else {
      setSelectState(prevState => ({ ...prevState, [value[0].name]: value[0].value }));
    }
  }

  const handleChangeSellers = (value) => {
    if (value.length === 0) {
      setSelectState(prevState => ({ ...prevState, seller: ''}));
    } else {
      setSelectState(prevState => ({ ...prevState, [value[0].name]: value[0].value }));
    }
  };

  //Handling Input change in Inputs
  const handleInput = e => {
		const { name, value } = e.target;
    var valueNumber = value.replace(/[^0-9]+/g, "");

		setSelectState(prevState => ({ ...prevState, [name]: valueNumber }));
	};

  //Update Context when SelectState Change
  useEffect(() => {
    setData(prevState => ({ ...prevState, searchValues: selectState }));
  }, [selectState]);

  //Reset Search with context when go back to HOME
  useEffect(() => {
    pathName === '/Pages/Home/Home' && setSelectState(initalValues);
  }, []);

  //States to clean the values up when clicking remove button
  const [brandsValue, setBrandsValue] = useState([]);
  const [modelsValue, setModelsValue] = useState([]);
  const [sellersValue, setSellersValue] = useState([]);

  //Keep values rendered in selects when search is coming from Home
  useEffect(() => {
    showResults && data.searchValues.brand &&
    setBrandsValue([{name: 'brand', value: data.searchValues.brand, label: data.searchValues.brand}]);

    showResults && data.searchValues.model &&
    setModelsValue([{name: 'model', value: data.searchValues.model, label: data.searchValues.model}]);

    showResults && data.searchValues.seller &&
    setSellersValue([{name: 'seller', value: data.searchValues.seller, label: data.searchValues.seller}]);
  }, [])

  //Delete individual result in Search
  const deleteResult = (value) => {
    setSelectState(prevState => ({ ...prevState, [value[0]]: '' }));

    switch (value[0]) {
      case 'brand':
        setBrandsValue([]);
        break;
      case 'model':
        setModelsValue([]);
        break;
      case 'seller':
        setSellersValue([]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={`search-container bg-light ${className}`}>
        <div className='history-search-container'>
          {
            showResults && (
              <>
                { Object.entries(data.searchValues).map((value, key) => {
                    return (
                      value[1] &&
                      <div key={key}>
                        <p className='search-values'
                            onClick={() => deleteResult(value)}>
                            {numberWithDots(value[1])}
                          <span className='checkMark dark-color bg-light'>
                            X
                          </span>
                        </p>
                      </div>
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
            className='brand-select dark-color'
            placeholder='Marca'
            values={brandsValue}
            onChange={(brandsValue) => {
              setBrandsValue(brandsValue)
              handleChangeBrand(brandsValue)
            }}
            options={data.select.brand}
          />
          <Select
            name='model'
            className='model-select dark-color'
            placeholder='Modelo'
            values={modelsValue}
            onChange={(modelsValue) => {
              setModelsValue(modelsValue)
              handleChangeModel(modelsValue)
            }}
            options={models}
          />
          <Select
            name='seller'
            className='seller-select dark-color'
            placeholder='Vendedor'
            values={sellersValue}
            onChange={(sellersValue) => {
              setSellersValue(sellersValue)
              handleChangeSellers(sellersValue)
            }}
            options={data.select.seller}
          />
          <Input
            containerClassName='km-select'
            InputClassName='input-search dark-color'
            placeholder='Km'
            type='number'
            inputName='km'
            value={numberWithDots(selectState.km)}
            labelClassName='label-input-name'
            onChange={handleInput}
            onBlur={ (e) => {
              if(selectState.km) {
                !isValidKm(e) &&
                setSelectState(prevState => ({...prevState, km: ''}));
              }
            }}
          />
          <Input
            containerClassName='year-select'
            InputClassName='input-search dark-color'
            placeholder='Año'
            type='number'
            inputName='year'
            value={numberWithDots(selectState.year)}
            labelClassName='label-input-name'
            onChange={handleInput}
            onBlur={ (e) => {
              if(selectState.year) {
                !isValidAnno(e) &&
                setSelectState(prevState => ({...prevState, year: ''}));
              }
            }}
          />
          <Input
            containerClassName='price-select'
            InputClassName='input-search dark-color'
            placeholder='Precio'
            type='number'
            inputName='price'
            value={numberWithDots(selectState.price)}
            labelClassName='label-input-name'
            onChange={handleInput}
            onBlur={ (e) => {
              if(selectState.price) {
                !isValidPrice(e) &&
                setSelectState(prevState => ({...prevState, price: ''}));
              }
            }}
          />
          <div className='select-buttons'>
            {
              !showResults &&
                <Button
                  onClick={handleSearch}
                  className='bn-filter btn total-width'
                  name='Buscar'
                />
            }
            <Button
              className='btn-reset total-width'
              name='Borrar'
              onClick={(e) => {
                e.preventDefault();
                setBrandsValue([]);
                setModelsValue([]);
                setSellersValue([]);
                setSelectState(initalValues);
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;


