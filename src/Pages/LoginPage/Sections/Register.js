import LoginForm from '../../../Components/LoginForm/LoginForm';
import { Context } from '../../../Context';
import { useContext} from 'react';
import { useState } from 'react';

const Register = () => {
  const { setData } = useContext(Context);

  const Registercredentials = { username: '', email: '', password: '' };
  const [register, setRegister] = useState(Registercredentials);

  //Upload user in DDBB
  //Login handleChange in inputs to make DDBB call
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
          alert('Gracias por registrate, por favor haz login para acceder a tu cuenta');
        }
      }
    ).catch(error => console.log(error));
  }

  return (
    <LoginForm
      onFormSubmit={submitRegisterCredentials}
      loginHeader='Registrar'
      onChange={handleRegisterChange}
      valueUserName={register.username}
      valueEmail={register.email}
      setInitialValue={setRegister}
      valuePassword={register.password}
      buttonName='Registrar'
      isShowRegister
    />
  )
}

export default Register;
