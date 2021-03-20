import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { useHistory } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { Context } from '../../Context';
import jwt_decode from "jwt-decode";

const login_URL = `url('/img/bg-login.jpg')`;

const LoginPage= () => {
  const { data, setData } = useContext(Context);

  //Change page when access as an user
  let navigate = useHistory();

  //Login credentials
  const Logincredentials = { email: '', password: '' };
  const [login, setLogin] = useState(Logincredentials);

  //Login handleChange in inputs to make DDBB call
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin(prevState => ({ ...prevState, [name]: value }));
  }

  //Submit Login credentials to call DDBB
  const submitLoginCredentials = (e) => {
    e.preventDefault();

    const config = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username: login.email, password: login.password })
    };

    const request = new Request('http://localhost:8000/login', config);
    fetch(request)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            alert('Credenciales incorrectas, inténtalo de nuevo!!')
          }
          throw new Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then(
        response => {
          localStorage.setItem('UserToken', response.token);
          localStorage.setItem('isAuthenticated', true);

          var decoded = jwt_decode(response.token);
          console.log(decoded);

          setLogin(Logincredentials);
          getUserData();
      }).catch( error => console.log('Error: ', error));
  }

  //Register credentials
  const Registercredentials = { username: '', email: '', password: '' };
  const [register, setRegister] = useState(Registercredentials);

  //Upload user in DDBB //Login handleChange in inputs to make DDBB call
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister(prevState => ({ ...prevState, [name]: value }));
  }

  //Register Login credentials to call DDBB
  const submitRegisterCredentials = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', register.username);
    formData.append('email', register.email);
    formData.append('password', register.password);

    fetch('http://localhost:8000/user/add', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
    .then(response => {
      if (!response.ok)
        throw new Error(response.statusText);
      return response.json();
    })
    .then(
      resp => {
        if (resp.code === 400) {
          alert(resp.message);
        } else {
          setRegister(Registercredentials);
          setData(prevState => ({ ...prevState, userLoginData: resp}))
          alert("Gracias por registrate, por favor haz login para acceder a tu cuenta");
        }
      }
    ).catch(error => console.log(error));
  }

  //Get user data when login or register
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
        getUserFavourites(res.id);
      })
      .catch( e => console.log(e))
  }

  //Get favourites cars when login or register
  const getUserFavourites = (id) => {
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
        navigate.push('/Pages/UserPage/UserPage/#user');
      })
      .catch( e => console.log(e))
  }

  return (
    <div id='login'>
      <HeroSecondary
      src={login_URL}
      text='Hazte ya Usuario...'
      />
      <div className='container'>
        <div className='forms-container'>
          <div className='login-container'>
            <form className='login-form'>
              <h2 className='heading-login'>Login</h2>
              <Input
                onChange={handleLoginChange}
                type='text'
                inputName='email'
                value={login.email}
                placeholder='Email'
                required={true}
              />
              <Input
                type='password'
                inputName='password'
                value={login.password}
                onChange={handleLoginChange}
                placeholder='Contraseña'
                required={true}
              />
              <div className='bottom-form total-width'>
                  <Button
                    name='Login'
                    className='btn-login'
                    type='submit'
                    onClick={submitLoginCredentials}
                  />
                <label className='label-login grey-color'>
                  <input className='input' type='checkbox' name='remember' />
                  <span className='total-width'>Recordar Cuenta</span>
                </label>
              </div>
              <a href='#' className='forgot-password main-color'>
                ¿Olvidaste la contraseña?
              </a>
            </form>
          </div>
          <div className='login-register-container'>
            <form className='login-form' onSubmit={submitRegisterCredentials} >
              <h2 className='heading-login'>Registrar</h2>
              <Input
                onChange={handleRegisterChange}
                inputName='username'
                value={register.username}
                labelClassName='grey-color'
                type='text'
                placeholder='Nombre'
                required={true}
              />
              <Input
                InputClassName={false}
                onChange={handleRegisterChange}
                inputName='email'
                value={register.email}
                type='email'
                placeholder='Email'
                required={true}
              />
               <Input
                InputClassName={false}
                onChange={handleRegisterChange}
                inputName='password'
                value={register.password}
                type='password'
                placeholder='Contraseña'
                required={true}
              />
              <div className='bottom-form'>
                <Button
                  name='Registrar'
                  className='btn-login'
                  type='submit'
                />
              </div>
              <p className='register-privacy grey-color'>
                Sus datos personales se utilizarán para mapear
                los vehículos que agregó al sitio web, para
                administrar el acceso a su cuenta y para otros
                fines descritos en nuestra
                <a
                  className='main-color'
                  href='#'> política de privacidad.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
