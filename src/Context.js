import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const initialValue = {
  select: {
    brand: [
      {name:'brand', label: 'Aston Martin', value: 'Aston Martin'},
      {name:'brand', label: 'Austin', value: 'Austin'},
      {name:'brand', label: 'Bentley', value: 'Bentley'},
      {name:'brand', label: 'Buick', value: 'Buick'},
      {name:'brand', label: 'Chevrolet', value: 'Chevrolet'},
      {name:'brand', label: 'Citroen', value: 'Citroen'},
      {name:'brand', label: 'De Tomaso', value: 'De Tomaso'},
      {name:'brand', label: 'Fiat', value: 'Fiat'},
      {name:'brand', label: 'Ford', value: 'Ford'},
      {name:'brand', label: 'Jaguar', value: 'Jaguar'},
      {name:'brand', label: 'OldTimer', value: 'OldTimer'},
      {name:'brand', label: 'Pontiac', value: 'Pontiac'},
      {name:'brand', label: 'Rolls Royce', value: 'Rolls Royce'},
    ],
    seller: [
      {name:'seller', label:'Particular', value: 'Particular'},
      {name:'seller', label:'Concesionario', value: 'Concesionario'}
    ],
  },
  searchCars: [],
  searchValues: { brand:'', model:'', seller:'', km:'', year:'', price:''},
  detailsCar: [{}],
  userLoginData: { id: '', name: '', email: '', address: '', city: '', phone: '', type:'' },
  favourites: [{ brand: '', carPrice: '', carYear: '', idCar: '', idUser: '', image: '', model: ''}],
  published: [{
    // idCar: '', brand:'', model: '', km: '', price: '',
    // year: '', shortDescription: '', longDescription: '', imageMain: '',
    // imageSecond: '', imageThird: '', imageFourth: '', imageFifth: ''
  }],
  updatePublished: {
    idCar: '', brand:'', model: '', km: '', price: '',
    year: '', shortDescription: '', longDescription: '', imageMain: '',
    imageSecond: '', imageThird: '', imageFourth: '', imageFifth: ''
  },
  heroSecundaryURL : {
    login_URL : `url('/img/bg-login.jpg')`,
    publish_URL : `url('/img/bg-publish.jpg')`,
    user_URL : `url('/img/bg-user.jpg')`,
    search_URL : `url('/img/bg-search.jpg')`,
    edit_URL : `url('/img/bg-edit.jpg')`,
    details_URL : `url('/img/bg-detail.jpg')`,
  }
}

const ContextProvider = (props) => {
  const [data, setData] = useState(initialValue);
console.log(data.published);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setIsAuthenticated(localStorage.isAuthenticated);
  }, [location]);

  const getUserData = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    fetch(`http://localhost:8000/user/data`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then( res => {
        setData(prevState => ({ ...prevState, userLoginData: res}));
        refreshUserFavourites(res.id);
      })
      .catch( e => console.log(e))
  }

  const refreshUserFavourites = (id) => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };
    fetch(`http://localhost:8000/favourite/${id}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then( res => {
        setData(prevState => ({ ...prevState, favourites: res}));
      })
      .catch( e => console.log(e))
  }

  const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <Context.Provider value={
      {
        data,
        setData,
        getUserData,
        isAuthenticated,
        numberWithDots
      }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider }

