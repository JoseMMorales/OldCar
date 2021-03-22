import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, NoResult } from '../../Components/Generic';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import { useContext, useEffect, useState } from 'react';

const login_URL = `url('/img/bg-user.jpg')`;

const UserPage = () => {
  let navigate = useHistory();
  const { data, setData, getUserData, numberWithDots } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;
  const [isContainer, setIsContainer] = useState(false);

  useEffect(() => {
    isAuthenticated && getUserData()
  }, [])

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth > 1200) {
  //       setIsContainer(true);
  //     }
  //   }, false);
  // }, []);

  const deleteUser = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/user/delete`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  const deleteFavouriteCar = (idCar) => {
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/deleteFavourite/${idCar}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(
        res => {
          const newFavouritesArray = data.favourites.filter((car) => car.idCar !== res.idCar);
          setData(prevState => ({
            ...prevState,
            favourites: [...newFavouritesArray]
          }))
        })
      .catch( e => console.log(e));
  };

  const getPublished = () => {
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/published/cars`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(
        res => {
          setData(prevState => ({ ...prevState, published: res}))
        })
      .catch( e => console.log(e));
  };

  const deletePublished = (idCar) => {
    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}`}
    };
    fetch(`http://localhost:8000/published/delete/${idCar}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(
        res => {
          const newPublishedArray = data.published.filter((car) => car.idCar !== res.id);
          setData(prevState => ({ ...prevState, published: newPublishedArray}));
        })
      .catch( e => console.log(e));
  };

  return (
    <div id='user'>
      <HeroSecondary
        src={login_URL}
        text='Sitio usuario OldCar'
      />
      <div className={`user-container container`}>
        <div className='user-sidebar'>
          <ul className='user-list'>
            <li className='user-list-element'>
              <Link
                className='link-user-hover dark-color'
                to={'/Pages/EditPage/EditPage'}>
                Perfil
              </Link>
            </li>
            <li
              className='user-list-element dark-color'
              onClick={getPublished}>
              Publicados
            </li>
            <li
              className='user-list-element'
              onClick={() => {
                deleteUser();
                setData(prevState => ({
                  ...prevState,
                  userLoginData:{ id: '', name: '', email: '', address: '', city: '', phone: '', type:'' },
                  published: [{ idCar: '', brand: '', model: '', imageMain: '', price: '', km: '', year: ''}]
                }))
                window.localStorage.removeItem('isAuthenticated');
                alert(`Tu cuenta ha sido eliminada, GRACIAS!!`);
              }}>
              <Link
                className='link-user-hover dark-color'
                to={'/'}>
                Eliminar cuenta
              </Link>
            </li>
            <li
              className='user-list-element'
              onClick={() => {
                window.localStorage.removeItem('isAuthenticated');
                setData(prevState => ({
                  ...prevState,
                  userLoginData:{ id: '', name: '', email: '', address: '', city: '', phone: '', type:'' },
                  published: [{ idCar: '', brand: '', model: '', imageMain: '', price: '', km: '', year: ''}]
                }))
              }}>
              <Link className='link-user-hover dark-color' to={'/'}>Salir</Link>
            </li>
          </ul>
        </div>
        <div className='user-content user-container-details'>
          <h2 className='heading-details-user'>{data.userLoginData.name}</h2>
          <div className='user-details'>
            <p className='details'><strong>Tipo:</strong> {data.userLoginData.type}</p>
            <p className='details'><strong>Dirección:</strong> {data.userLoginData.address}</p>
            <p className='details'><strong>Ciudad:</strong> {data.userLoginData.city}</p>
            <p className='details'><strong>Teléfono:</strong> {data.userLoginData.phone}</p>
            <p className='details'><strong>Email:</strong> {data.userLoginData.email}</p>
          </div>
        </div>
        <div className='user-favourites user-container-details'>
          <h2 className='heading-details-user'>Favoritos</h2>
          <div className='user-details-favourites'>
            {
              data.favourites.length > 0 &&
              Object.values(data.favourites).map((favourite, key) =>{
                return (
                  <div className='card' key={key}>
                    <img className='favourite-image' src={favourite.image} alt='card Image' />
                    <div className='container-favourite-details'>
                      <h3>
                        <b>{favourite.brand} {favourite.model}</b>
                      </h3>
                      <Button
                        className='favourites-button'
                        onClick={() => deleteFavouriteCar(favourite.idCar)}
                        name='Eliminar'
                      />
                    </div>
                  </div>
                )
              })
            }
            {
              data.favourites.length === 0 && <NoResult />
            }
          </div>
        </div>
        <div className='user-published user-container-details'>
          <h2 className='heading-details-user'>Publicados</h2>
          <div className='user-details-published'>
          {
              data.published.length > 1 &&
              Object.values(data.published).map((publish, key) =>{
                return (
                  <div className='card-published' key={key}>
                    <img className='image-published' src={publish.imageMain} alt='card Image' />
                    <div className='container-published'>
                      <div className='container-published-details'>
                        <h1>
                          <b>{publish.brand} {publish.model}</b>
                        </h1>
                        <p className='grey-color'><b className='dark-color'>Año </b>{`${numberWithDots(`${ publish.year}`)}`}</p>
                        <p className='grey-color'><b className='dark-color'>Precio </b>{`${numberWithDots(`${ publish.price}`)}`}</p>
                        <p className='grey-color'><b className='dark-color'>Km </b>{`${numberWithDots(`${ publish.km}`)}`}</p>
                      </div>
                      <div className='published-button-container'>
                        <Button
                          className='published-button'
                          onClick={() => deletePublished(publish.idCar)}
                          name='Eliminar'
                        />
                        <Button
                          className='published-button'
                          onClick={() => {
                            console.log(publish);
                            setData(prevState => ({
                              ...prevState,
                              updatePublished: publish
                            }))
                            navigate.push(
                              '/Pages/PublishPage/PublishPage',
                              { params: true, carId: publish.idCar }
                            );
                          }}
                          name='Editar'
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
            {
              data.published.length === 1 && <NoResult />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
