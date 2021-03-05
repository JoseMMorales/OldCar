import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '../../Components/Generic';

const login_URL = `url('/img/bg-login.jpg')`;

const LoginPage= () => {
  let navigate = useHistory();

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
                type='text'
                placeholder='Email usuario'
                required={true}
              />
              <Input
                htmlFor='Loginpassword'
                Inputid='Loginpassword'
                // labelName='Contraseña*'
                InputClassName={false}
                labelClassName='grey-color'
                type='password'
                placeholder='Contraseña'
                required={true}
              />
              <div className='bottom-form total-width'>
                  <Button
                    name='Login'
                    className='btn-login'
                    type='submit'
                    onClick={() => navigate.push('/Pages/UserPage/UserPage/#user')}
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
          <div className='register-container'>
            <form className='login-form'>
              <h2 className='heading-login'>Registrar</h2>
              <Input
                htmlFor='registerUsername'
                Inputid='registerUsername'
                labelName='Nombre usuario*'
                InputClassName={false}
                labelClassName='grey-color'
                type='text'
                placeholder='Usuario'
                required={true}
              />
              <Input
                htmlFor='registerEmail'
                Inputid='registerEmail'
                labelName='Email*'
                labelClassName='grey-color'
                InputClassName={false}
                type='email'
                placeholder='usuario@email'
                required={true}
              />
               <Input
                htmlFor='registerPassword'
                Inputid='registerPassword'
                labelName='Contraseña*'
                labelClassName='grey-color'
                InputClassName={false}
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
