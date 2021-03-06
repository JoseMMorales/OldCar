import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
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

  //Login call to DDBB to check credentials and get user details
  const submitLoginCredentials = (e) => {
    e.preventDefault();

    const config = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({username: login.email, password: login.password})
    };

    const request = new Request('http://localhost:8000/login', config);
    fetch(request)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);

        return response.json();
      })
      .then(
        response => {
          // console.log('Answer ok: ', response)
          localStorage.setItem('UserToken', response.token);

          var decoded = jwt_decode(response.token);
          console.log(decoded);

          setLogin(Logincredentials);
          setData(prevState => ({ ...prevState, isAuthenticated: true }));
          navigate.push('/Pages/UserPage/UserPage/#user');

          // getUserData(response.id);
      }).catch( error => console.log('Error: ', error));
  }

  const getUserData = (id) => {
    const token = localStorage.getItem('UserToken');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    fetch(`http://localhost:8000/user/${id}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);

        return response.json();
      })
      .then( res => {
        setData(prevState => ({ ...prevState, userLoginData: res}))
      })
      .catch( e => console.log(e))
  }

  //Register credentials
  const Registercredentials = { username: '', email: '', password: '' };
  const [register, setRegister] = useState(Registercredentials);

  //Upload user in DDBB
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister(prevState => ({ ...prevState, [name]: value }));
  }

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
        console.log("ok done" , resp);
        setRegister(Registercredentials);
        setData(prevState => ({ ...prevState, isAuthenticated: true }));
        navigate.push('/Pages/UserPage/UserPage/#user');
      }
    ).catch(error => console.log(error));
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
                htmlFor='loginUsername'
                Inputid='loginUsername'
                // labelName='Email usuario*'
                InputClassName={false}
                labelClassName='grey-color'
                onChange={handleLoginChange}
                type='text'
                inputName='email'
                value={login.email}
                placeholder='Email'
                required={true}
              />
              <Input
                htmlFor='Loginpassword'
                Inputid='Loginpassword'
                // labelName='Contraseña*'
                InputClassName={false}
                labelClassName='grey-color'
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
                htmlFor='registerUsername'
                Inputid='registerUsername'
                // labelName='Nombre usuario*'
                InputClassName={false}
                onChange={handleRegisterChange}
                inputName='username'
                value={register.username}
                labelClassName='grey-color'
                type='text'
                placeholder='Usuario'
                required={true}
              />
              <Input
                htmlFor='registerEmail'
                Inputid='registerEmail'
                // labelName='Email*'
                labelClassName='grey-color'
                InputClassName={false}
                onChange={handleRegisterChange}
                inputName='email'
                value={register.email}
                type='email'
                placeholder='usuario@email'
                required={true}
              />
               <Input
                htmlFor='registerPassword'
                Inputid='registerPassword'
                // labelName='Contraseña*'
                labelClassName='grey-color'
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
                  // onClick={() => navigate.push('/Pages/EditPage/EditPage#edit')}
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
