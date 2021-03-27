import { Button, Input } from '../Generic';
import {
  isValidEmail,
  isValidPassword,
  isValidText } from '../../Utils/FormValidations';

const LoginForm = ({
  onFormSubmit,
  loginHeader,
  onChange,
  valueUserName,
  setInitialValue,
  valueEmail,
  valuePassword,
  buttonName,
  isShowRegister
}) => {

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={onFormSubmit} >
        <h2 className='heading-login'>{loginHeader}</h2>
        {
          isShowRegister &&
          <Input
            onChange={onChange}
            inputName='username'
            value={valueUserName}
            labelClassName='grey-color'
            type='text'
            placeholder='Nombre'
            required={true}
            onBlur={ (e) => {
              if(valueUserName) {
                !isValidText(e) &&
                setInitialValue(prevState => ({...prevState, username: ''}));
              }
            }}
          />
        }
        <Input
          InputClassName={false}
          onChange={onChange}
          inputName='email'
          value={valueEmail}
          type='email'
          placeholder='Email'
          required={true}
          onBlur={ (e) => {
            if(valueEmail) {
              !isValidEmail(e) &&
              setInitialValue(prevState => ({...prevState, email: ''}));
            }
          }}
        />
          <Input
          InputClassName={false}
          onChange={onChange}
          inputName='password'
          value={valuePassword}
          type='password'
          placeholder='Contraseña'
          required={true}
          onBlur={ (e) => {
            if(valuePassword) {
              !isValidPassword(e) &&
              setInitialValue(prevState => ({...prevState, password: ''}));
            }
          }}
        />
        <div className='bottom-form'>
          <Button
            name={buttonName}
            className='btn-login'
            type='submit'
          />
        </div>
      </form>
    </div>
  )
};

export default LoginForm;
