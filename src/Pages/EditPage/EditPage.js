import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useState } from 'react';

const edit_URL = `url('/img/bg-edit.jpg')`;

const EditPage = () => {
  const [editForm, setEditForm] = useState(
    {
      name: '',
      type: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      password: ''
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prevState => ({ ...prevState, [name]: value }));
  }

  const submitEditForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', editForm.name);
    formData.append('type', editForm.type);
    formData.append('email', editForm.email);
    formData.append('phone', editForm.phone);
    formData.append('address', editForm.address);
    formData.append('city', editForm.city);
    formData.append('password', editForm.password);

    fetch('http://localhost:8000/user/update', {
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
        // setRegister(Registercredentials);
        // setData(prevState => ({ ...prevState, isAuthenticated: true }));
        // navigate.push('/Pages/UserPage/UserPage/#user');
      }
    ).catch(error => console.log(error));
  }

    return (
    <div id='edit'>
      <HeroSecondary
        src={edit_URL}
        text='Edita tu perfil OldCar'
      />
      <div className='container'>
        <div className='register-container'>
          <form className='form-edit' onSubmit={submitEditForm}>
            <div className="heading-edit">
              <h1 className='edit-heading grey-color'>Información de Usuario</h1>
              <p>
                EDITA TUS DATOS DE TU CUENTA OLD
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
                  onChange={handleChange}
                  inputName='name'
                  value={editForm.name}
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editSeller'
                  Inputid='editSeller'
                  inputName='type'
                  value={editForm.type}
                  labelName='Particular o Concesionario'
                  onChange={handleChange}
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
                  onChange={handleChange}
                  inputName='email'
                  value={editForm.email}
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='email'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editAddress'
                  Inputid='editAddress'
                  labelName='Dirección'
                  onChange={handleChange}
                  InputClassName={false}
                  inputName='address'
                  value={editForm.address}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editPhone'
                  Inputid='editPhone'
                  labelName='Teléfono'
                  onChange={handleChange}
                  inputName='phone'
                  value={editForm.phone}
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='tlf'
                />
                 <Input
                  containerClassName='edit-form-container'
                  htmlFor='editCity'
                  Inputid='editCity'
                  labelName='Ciudad'
                  onChange={handleChange}
                  inputName='city'
                  value={editForm.city}
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
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
                  onChange={handleChange}
                  inputName='password'
                  value={editForm.password}
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='password'
                />
                <Input
                  containerClassName='edit-form-container'
                  htmlFor='editRepeatPassword'
                  Inputid='editRepeatPassword'
                  labelName='Repite Contraseña'
                  onChange={handleChange}
                  name='repeatPassword'
                  // value={editForm.}
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
