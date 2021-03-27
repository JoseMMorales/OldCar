import LoginForm from '../../../Components/LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Context } from '../../../Context';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const { getUserData } = useContext(Context);

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

        let decoded = jwt_decode(response.token);
        console.log(decoded.roles);

        const isAdmin = decoded.roles.includes('ROLE_ADMIN');

        if (isAdmin) {
          localStorage.setItem('admin', true);
          navigate.push('/Pages/AdminPage/AdminPage');
        } else {
          getUserData();
          navigate.push('/Pages/UserPage/UserPage/#user');
        };
    }).catch( error => console.log('Error: ', error));
  };

  return (
    <LoginForm
      onFormSubmit={submitLoginCredentials}
      loginHeader='Login'
      onChange={handleLoginChange}
      valueEmail={login.email}
      setInitialValue={setLogin}
      valuePassword={login.password}
      buttonName='Login'
    />
  )
}

export default Login;
