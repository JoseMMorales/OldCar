import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Context } from '../../Context';
import { useContext } from 'react';
import {
  Login,
  Register } from './Sections';

const LoginPage= () => {
  const { data } = useContext(Context);

  return (
    <div id='login'>
      <HeroSecondary
      src={data.heroSecundaryURL.login_URL}
      text='Hazte ya usuario...'
      />
      <div className='container'>
        <div className='forms-container'>
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
