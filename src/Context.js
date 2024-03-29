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
  published: [],
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
    admin_URL : `url('/img/bg-admin.jpeg')`
  },
  footerURL: {
    linkedin: 'https://www.linkedin.com/in/jose-m-369686b9/',
    github: 'https://github.com/JoseMMorales/',
    facebook: 'https://es-es.facebook.com/Codespaceacademy/',
    twitter: 'https://twitter.com/codespaceacade?lang=en/'
  }
};

const ContextProvider = (props) => {
  const [data, setData] = useState(initialValue);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [screenInnerWith, setScreenInnerWith] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setIsAuthenticated(localStorage.isAuthenticated);
    setIsAdmin(localStorage.admin);
    let intViewportWidth = window.innerWidth;
    setScreenInnerWith(intViewportWidth);
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
  };

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
  };

  const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <Context.Provider value={
      {
        data,
        setData,
        getUserData,
        isAuthenticated,
        screenInnerWith,
        isAdmin,
        numberWithDots,
        scrollWithOffset
      }}>
      {props.children}
    </Context.Provider>
  )
};

export { ContextProvider };

