import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button } from '../../Components/Generic';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { useState , useContext, useEffect } from 'react';
import { Context } from '../../Context';

import {
  EditPersonalForm,
  EditContactForm,
  EditSecurityForm } from './Sections';

const EditPage = () => {
  let navigate = useHistory();
  const { data, setData, getUserData } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;

  useEffect(() => {
    isAuthenticated && getUserData();
  }, [])

  const [editForm, setEditForm] = useState(
    {
      name: data.userLoginData.name,
      type: data.userLoginData.type,
      phone: data.userLoginData.phone,
      address: data.userLoginData.address,
      city: data.userLoginData.city,
      password: ''
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prevState => ({ ...prevState, [name]: value }));
    setData(prevState => ({ ...prevState,
      userLoginData: {...prevState.userLoginData, [name]: value }
    }))
  }

  const submitEditForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', editForm.name);
    formData.append('type', editForm.type);
    formData.append('phone', editForm.phone);
    formData.append('address', editForm.address);
    formData.append('city', editForm.city);
    formData.append('password', editForm.password);

    const token = localStorage.getItem('UserToken');

    fetch(`http://localhost:8000/user/update`, {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok)
        throw new Error(response.statusText);
      return response.json();
    })
    .then(
      resp => {
        setData(prevState => ({ ...prevState, userLoginData: resp}));
        navigate.push('/Pages/UserPage/UserPage');
      }
    ).catch(error => console.log(error));
  };

  return (
    <div id='edit'>
      <HeroSecondary
        src={data.heroSecundaryURL.edit_URL}
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
              <p>
                <b>*Campos obligarorios</b>
              </p>
            </div>
            <EditPersonalForm
              IconPersonal={<RiArrowDownSFill className='main-color'/>}
              handleChange={handleChange}
              valuePersonalName={editForm.name}
              setEditForm={setEditForm}
              valuePersonalType={editForm.type}
            />
            <EditContactForm
              IconContact={<RiArrowDownSFill className='main-color'/>}
              handleChange={handleChange}
              valueContactAddress={editForm.address}
              setEditForm={setEditForm}
              valueContactPhone={editForm.phone}
              valueContactCity={editForm.city}
            />
            <EditSecurityForm
              IconSecurity={<RiArrowDownSFill className='main-color'/>}
              handleChange={handleChange}
              valueSecurityPassword={editForm.password}
              setEditForm={setEditForm}
            />
            <div className="edit-buttons">
              <Button
                name='Confirmar'
                className='btn-edit'
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default EditPage;
