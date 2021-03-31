import { isValidShortDescription, isValidLongDescription } from '../../Utils/FormValidations';
import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import PublishHeading from './Sections/PublishHeading/PublishHeading';
import { Button, TextArea } from '../../Components/Generic';
import { useState , useContext, useEffect } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';

import {
  PublishPersonalDetails,
  PublishCarDetails,
  PublishFilesSection
} from './Sections';

const PublishPage = (props) => {
  let navigate = useHistory();
  const { data, setData, getUserData } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;
  const [stateButton, setStateButton] = useState(0);

  useEffect(() => {
    isAuthenticated && getUserData();
  }, [])

  const user = props.location.state?.user;
  const CarNotPublished = props.location.state?.CarNotPublished;
  const carId = props.location.state?.carId;

  const [userInput, setUserInput] = useState(
    {
    username: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    type: '',
    brand:'',
    model: '',
    km: '',
    price: '',
    year: '',
    shortDescription: '',
    longDescription: '',
    files: []
  });

  const [updateInput, setUpdateInput] = useState(
    {
      idCar: data.updatePublished.idCar,
      brand: data.updatePublished.brand,
      model: data.updatePublished.model,
      km: data.updatePublished.km,
      price: data.updatePublished.price,
      year: data.updatePublished.year,
      shortDescription: data.updatePublished.shortDescription,
      longDescription: data.updatePublished.longDescription,
      files: [
        data.updatePublished.imageMain,
        data.updatePublished.imageSecond,
        data.updatePublished.imageThird,
        data.updatePublished.imageFourth,
        data.updatePublished.imageFifth,
      ]
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    (/^\d.+$/.test(value)) &&
      (value = value.replace(/[^0-9]+/g, ""));

    if (user && !CarNotPublished) {
      setUpdateInput({...updateInput, [name]: value});
    } else if (CarNotPublished || !user) {
      setUserInput({...userInput, [name]: value});
    }
  };

  const handleFiles = (e) => {
    const fileObj = e.target.files[0];

    if (user && !CarNotPublished) {
      setUpdateInput(prevState => ({
        ...prevState,
        files: [...prevState.files, fileObj]
      }));
    } else if (CarNotPublished || !user) {
      setUserInput(prevState => ({
        ...prevState,
        files: [...prevState.files, fileObj]
      }))
    }
    e.target.value = '';
  };

  const deleteImage = (name, idCar, keyPhoto) => {
    if (user && !CarNotPublished) {
      const photoName = name.slice(26);

      const token = localStorage.getItem('UserToken');
      const config = {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`}
      };

      fetch(`http://localhost:8000/published/deleteImage?picture=${photoName}&idCar=${idCar}`, config)
      .then(response => response.json())
      .then(
        resp => {
          if (resp.code === 200) {
            const newArray = updateInput.files.filter((photo, key) => key != keyPhoto);
            setUpdateInput({...updateInput, files: newArray});
          }
        }
      ).catch(error => console.log(error));

    } else if (CarNotPublished || !user) {
    const newFilesArray = userInput.files.filter((file) => file.name !== name);
      setUserInput(prevState => ({
        ...prevState,
        files: [...newFilesArray]
      }))
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    switch (stateButton) {
      case 1:
        updatePublishedCar(carId);
        break;
      case 2:
        updatePublishedImages();
        break;
      case 3:
        publishCarNotUser();
        break;
      case 4:
        publishCarUser();
        break;
      default:
        break;
    }
  };

  const publishCarNotUser = () => {
    const formData = new FormData();
    formData.append('username', userInput.username);
    formData.append('email', userInput.email);
    formData.append('phone', userInput.phone);
    formData.append('address', userInput.address);
    formData.append('city', userInput.city);
    formData.append('type', userInput.type);
    formData.append('brand', userInput.brand);
    formData.append('model', userInput.model);
    formData.append('km', userInput.km);
    formData.append('price', userInput.price);
    formData.append('year', userInput.year);
    formData.append('shortDescription', userInput.shortDescription);
    formData.append('longDescription', userInput.longDescription);
    formData.append('file0', userInput.files[0]);
    formData.append('file1', userInput.files[1]);
    formData.append('file2', userInput.files[2]);
    formData.append('file3', userInput.files[3]);
    formData.append('file4', userInput.files[4]);

    fetch('http://localhost:8000/publish/notUser', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
    .then(response => response.json())
    .then(
      resp => {
        if (resp.code === 200) {
          navigate.push('/Pages/Home/Home');
          alert("Un email ha sido enviado con tus datos publicados, GRACIAS!!");
        } else {
          alert("El coche no ha sido publicado, GRACIAS!!");
        }
      }
    ).catch(error => console.log(error))
  };

  const updatePublishedCar = (carId) => {
    const formData = new FormData();
    formData.append('brand', updateInput.brand);
    formData.append('model', updateInput.model);
    formData.append('km', updateInput.km);
    formData.append('price', updateInput.price);
    formData.append('year', updateInput.year);
    formData.append('shortDescription', updateInput.shortDescription);
    formData.append('longDescription', updateInput.longDescription);

    const token = localStorage.getItem('UserToken');
    const config = {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`},
      body: formData,
    };

    fetch(`http://localhost:8000/published/update/${carId}`, config)
      .then(response => {
        if (!response.ok)
          throw new Error(response.statusText);
        return response.json();
      })
      .then(
        res => {
          if (res.code === 200) {
            alert("Nuevo datos cambiados, GRACIAS!!");
            delete res.code;

            const newArrayPublished = [];
            data.published.map(car => car.idCar !== res.idCar && newArrayPublished.push(car));
            newArrayPublished.push(res);

            setData(prevState => ({ ...prevState, published: [...newArrayPublished] }))
            navigate.push('/Pages/UserPage/UserPage');
          } else {
            alert("Datos no cambiados, inténtalo de nuevo!!");
          }
        })
      .catch( e => console.log(e));
  };

  const updatePublishedImages = () => {
    const token = localStorage.getItem('UserToken');
    const idCar = updateInput.idCar;

    const formData = new FormData();
    formData.append('file0', updateInput.files[0]);
    formData.append('file1', updateInput.files[1]);
    formData.append('file2', updateInput.files[2]);
    formData.append('file3', updateInput.files[3]);
    formData.append('file4', updateInput.files[4]);

    fetch(`http://localhost:8000/published/update/image/${idCar}`, {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: { 'Authorization': `Bearer ${token}`}
    })
    .then(response => response.json())
    .then(
      resp => {
        if (resp.code === 200) {
          alert("Nuevas imágenes cambiados, GRACIAS!!");
          delete resp.code;

          const newArrayPublished = [];
          data.published.map(car => car.idCar !== resp.idCar && newArrayPublished.push(car));
          newArrayPublished.push(resp);

          setData(prevState => ({ ...prevState, published: [...newArrayPublished] }))
          navigate.push('/Pages/UserPage/UserPage');
        } else {
          alert("Imágenes no cambiados, inténtalo de nuevo!!");
        }
      }
    ).catch(error => console.log(error));
  };

  const publishCarUser = () => {
    const token = localStorage.getItem('UserToken');

    const formData = new FormData();
    formData.append('brand', userInput.brand);
    formData.append('model', userInput.model);
    formData.append('km', userInput.km);
    formData.append('price', userInput.price);
    formData.append('year', userInput.year);
    formData.append('shortDescription', userInput.shortDescription);
    formData.append('longDescription', userInput.longDescription);
    formData.append('file0', userInput.files[0]);
    formData.append('file1', userInput.files[1]);
    formData.append('file2', userInput.files[2]);
    formData.append('file3', userInput.files[3]);
    formData.append('file4', userInput.files[4]);

    fetch('http://localhost:8000/publish/user', {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: { 'Authorization': `Bearer ${token}`}
    })
    .then(response => response.json())
    .then(
      resp => {
        setData(prevState => ({ ...prevState, published: [...prevState.published, resp]}));
        navigate.push('/Pages/UserPage/UserPage');
        alert('Vehículo creado en tu perfil');
      }
    ).catch(error => console.log(error));
  };

  return (
    <div id='publish'>
      <HeroSecondary
        src={data.heroSecundaryURL.publish_URL}
        text=' Publicaciones Únicas'
      />
      <div className='container'>
        <div className='publish-container'>
          <PublishHeading
            CarNotPublished={CarNotPublished}
            user={user}
          />
          <form
            className='form-publish'
            onSubmit={onSubmit}>
            {
              !user &&
              <div className='personal-details-publish'>
                <div className='heading-section-form bg-grey-Slight'>
                  <h3 className='main-text-heading-form main-color'>1. Tus Datos</h3>
                  <RiArrowDownSFill className='main-color'/>
                </div>
                <div className='inputs-section-form'>
                  <PublishPersonalDetails
                    handleChange={handleChange}
                    PublishValueName={userInput.username}
                    PublishValueEmail={userInput.email}
                    PublishValuePhone={userInput.phone}
                    PublishValueAddress={userInput.address}
                    PublishValueCity={userInput.city}
                    PublishValueSeller={userInput.type}
                    setUserInput={setUserInput}
                  />
                </div>
              </div>
            }
            <div className='car-info-publish'>
              <div className='heading-section-form bg-grey-Slight'>
                <h3 className='main-text-heading-form main-color'>Información del vehículo</h3>
                <RiArrowDownSFill className='main-color'/>
              </div>
              <div className='inputs-section-form'>
                <PublishCarDetails
                  user={user}
                  CarNotPublished={CarNotPublished}
                  handleChange={handleChange}
                  userInput={userInput}
                  updateInput={updateInput}
                  setUserInput={setUserInput}
                  setUpdateInput={setUpdateInput}
                />
              </div>
              <div className='description-container'>
                <h3 className='main-text-heading-form'>Tu vehiculo</h3>
                <TextArea
                  className='textarea-publish'
                  rows='3'
                  onChange={handleChange}
                  placeholder='Descripción corta (Max 50)*'
                  name='shortDescription'
                  value={
                    (!user && userInput.shortDescription) ||
                    (user && CarNotPublished && userInput.shortDescription) ||
                    (user && !CarNotPublished && updateInput.shortDescription) || ''
                  }
                  onBlur={ (e) => {
                    if(userInput.shortDescription) {
                      !isValidShortDescription(e) &&
                      setUserInput(prevState => ({...prevState, shortDescription: ''}));
                    } else if (updateInput.shortDescription) {
                      !isValidShortDescription(e) &&
                      setUpdateInput(prevState => ({...prevState, shortDescription: ''}));
                    }
                  }}
                />
                <TextArea
                  className='textarea-publish'
                  rows='8'
                  onChange={handleChange}
                  placeholder='Descripción larga (Max 150)*'
                  name='longDescription'
                  value={
                    (!user && userInput.longDescription) ||
                    (user && CarNotPublished && userInput.longDescription) ||
                    (user && !CarNotPublished && updateInput.longDescription) || ''
                  }
                  onBlur={ (e) => {
                    if(userInput.longDescription) {
                      !isValidLongDescription(e) &&
                      setUserInput(prevState => ({...prevState, longDescription: ''}));
                    } else if (updateInput.longDescription) {
                      !isValidLongDescription(e) &&
                      setUpdateInput(prevState => ({...prevState, longDescription: ''}));
                    }
                  }}
                />
              </div>
            </div>
            {
              (user && !CarNotPublished) &&
              <div className='publish-button-container'>
                <Button
                  onClick={() => (setStateButton(1))}
                  name='Editar Coche'
                  className='btn-publish'
                  type='submit'
                />
              </div>
            }
            <div className='car-pictures-publish'>
              <div className='heading-section-form bg-grey-Slight'>
                <h3 className='main-text-heading-form main-color'>Añade tus fotos</h3>
                <RiArrowDownSFill className='main-color'/>
              </div>
              <div className='files-section'>
                <PublishFilesSection
                  handleFiles={handleFiles}
                  CarNotPublished={CarNotPublished}
                  user={user}
                  userInput={userInput}
                  deleteImage={deleteImage}
                  updateInput={updateInput}
                />
              </div>
            </div>
            <div className='publish-button-container'>
              <Button
                name={ (user && !CarNotPublished) ? 'Editar Fotos' : 'Confirmar'}
                onClick={() => {
                  if((user && !CarNotPublished)) {
                    setStateButton(2);
                  } else if((!user && !CarNotPublished)) {
                    setStateButton(3);
                  } else if((user && CarNotPublished)) {
                    setStateButton(4);
                  }
                }}
                className='btn-publish'
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PublishPage;
