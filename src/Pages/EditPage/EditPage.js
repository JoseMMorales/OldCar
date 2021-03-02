import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { RiArrowDownSFill } from 'react-icons/ri';

const edit_URL = `url('/img/bg-edit.jpg')`;

const EditPage = () => {
  return (
    <div id='edit'>
      <HeroSecondary
        src={edit_URL}
        text='Edita tu perfil OldCar'
      />
      <div className='container'>
        <div className='register-container'>
          <form className='form-edit'>
            <div className="heading-edit">
              <h1 className='edit-heading grey-color'>Información de Usuario</h1>
              <p>
                INTRODUCE TUS DATOS PARA PODER ACCEDER A TU CUENTA OLD
                <span className="main-color">CAR</span>
              </p>
            </div>
            <div className='personal-info'>
              <div className='heading-form bg-grey-Slight'>
                <h3 className='main-edit-heading-form main-color'>Información Personal</h3>
                <RiArrowDownSFill className='main-color'/>
              </div>
              <div className="input-edit">
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editName'
                  Inputid='editName'
                  labelName='Nombre'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editSurname'
                  Inputid='editSurname'
                  labelName='Apellidos'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editSeller'
                  Inputid='editSeller'
                  labelName='Particular o Concesionario'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
              </div>
            </div>
            <div className="contact-info">
              <div className='heading-form bg-grey-Slight'>
                <h3 className='main-edit-heading-form main-color'>Contacto</h3>
                <RiArrowDownSFill className='main-color'/>
              </div>
              <div className="input-edit">
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editEmail'
                  Inputid='editEmail'
                  labelName='Email'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='email'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editAddress'
                  Inputid='editAddress'
                  labelName='Dirección'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editPhone'
                  Inputid='editPhone'
                  labelName='Teléfono'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='tlf'
                />
              </div>
            </div>
            <div className="security">
              <div className='heading-form bg-grey-Slight'>
                <h3 className='main-edit-heading-form main-color'>Seguridad</h3>
                <RiArrowDownSFill className='main-color'/>
              </div>
              <div className="input-edit">
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editPassword'
                  Inputid='editPassword'
                  labelName='Contraseña'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='password'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editRepeatPassword'
                  Inputid='editRepeatPassword'
                  labelName='Repite Contraseña'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='password'
                />
              </div>
            </div>
            <div className="edit-buttons">
              <Button
                name='Confirmar'
                className='btn-edit'
                type='submit' />
                <Button
                name='Borrar Campos'
                className='btn-edit'
                type='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default EditPage;
