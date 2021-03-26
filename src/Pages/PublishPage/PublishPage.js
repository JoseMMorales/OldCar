import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { useState , useContext, useEffect } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { MdAddAPhoto } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';

const PublishPage = (props) => {
  let navigate = useHistory();
  const { data, setData, getUserData } = useContext(Context);
  const isAuthenticated =  localStorage.isAuthenticated;
  const [stateButton, setStateButton] = useState(0);

  useEffect(() => {
    isAuthenticated && getUserData();
  }, [])

  const user = props.location.state?.user;
  const CarPublished = props.location.state?.CarPublished;
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

  // console.log('updateInput', updateInput.files)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (user && !CarPublished) {
      setUpdateInput({...updateInput, [name]: value});
    } else if (CarPublished || !user) {
      setUserInput({...userInput, [name]: value});
    }
  };

  const handleFiles = (e) => {
    const fileObj = e.target.files[0];

    if (user && !CarPublished) {
      setUpdateInput(prevState => ({
        ...prevState,
        files: [...prevState.files, fileObj]
      }));
    } else if (CarPublished || !user) {
      setUserInput(prevState => ({
        ...prevState,
        files: [...prevState.files, fileObj]
      }))
    }
  };

  const deleteImage = (name, idCar, keyPhoto) => {
    if (user && !CarPublished) {
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

    } else if (CarPublished || !user) {
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
        <div className='register-container'>
          {
            (CarPublished || !user)  &&
            <div className='heading-publish'>
              <h1 className='main-heading grey-color'>
                Publica tu anunio en Old
                <span className='main-color'>Car</span>
              </h1>
              <p>
                UNA PUBLICACIÓN GRATIS. MÁXIMA DIFUSION: Al publicar en
                Old
                <span className='main-color'>Car</span>, su coche aparecerá también en una extensa red de
                portales asociados a nosotros...
              </p>
              <p>
                <b>*Campos obligarorios</b>
              </p>
            </div>
          }
          {
            (user && !CarPublished) &&
            <div className='heading-publish'>
              <h1 className='main-heading grey-color'>
                Edita tu anunio en Old
                <span className='main-color'>Car</span>
              </h1>
              <p>
                En Old
                <span className='main-color'>Car</span> podrás editar tus anuncios con todos los detalles
                que quieras cambiar y luego verlos en página de usuario.
              </p>
              <p>
                <b>*Campos obligarorios</b>
              </p>
            </div>
          }
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
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishName'
                    Inputid='publishName'
                    labelName='Nombre*'
                    onChange={handleChange}
                    inputName='username'
                    value={userInput.username}
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='text'
                  />
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishEmail'
                    Inputid='publishEmail'
                    labelName='Email*'
                    onChange={handleChange}
                    inputName='email'
                    value={userInput.email}
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='email'
                  />
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishPhone'
                    Inputid='publishPhone'
                    labelName='Teléfono'
                    onChange={handleChange}
                    inputName='phone'
                    value={userInput.phone}
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='tlf'
                  />
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishAddress'
                    Inputid='publishAddress'
                    labelName='Dirección'
                    onChange={handleChange}
                    inputName='address'
                    value={userInput.address}
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='text'
                  />
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishCity'
                    Inputid='publishCity'
                    labelName='Ciudad*'
                    onChange={handleChange}
                    inputName='city'
                    value={userInput.city}
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='text'
                  />
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishSeller'
                    Inputid='publishSeller'
                    labelName='Vendedor*'
                    onChange={handleChange}
                    inputName='type'
                    value={userInput.type}
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='text'
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
                {
                  (!user || (user && CarPublished)) &&
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishBrand'
                    Inputid='publishBrand'
                    labelName='Marca*'
                    onChange={handleChange}
                    inputName='brand'
                    value={
                      (!user && userInput.brand) ||
                      (user && CarPublished && userInput.brand) ||
                      (user && !CarPublished && updateInput.brand) || ''
                    }
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='text'
                  />
                }
                {
                  (!user || (user && CarPublished)) &&
                  <Input
                    containerClassName='publish-form-container'
                    htmlFor='publishModel'
                    Inputid='publishModel'
                    labelName='Modelo*'
                    onChange={handleChange}
                    inputName='model'
                    value={
                      (!user && userInput.model) ||
                      (user && CarPublished && userInput.model) ||
                      (user && !CarPublished && updateInput.model) || ''
                    }
                    InputClassName={false}
                    labelClassName='grey-color'
                    type='text'
                  />
                }
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishKm'
                  Inputid='publishKm'
                  labelName='Km'
                  onChange={handleChange}
                  inputName='km'
                  value={
                    (!user && userInput.km) ||
                    (user && CarPublished && userInput.km) ||
                    (user && !CarPublished && updateInput.km) || ''
                  }
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='number'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishPrice'
                  Inputid='publishPrice'
                  labelName='Precio*'
                  onChange={handleChange}
                  inputName='price'
                  value={
                    (!user && userInput.price) ||
                    (user && CarPublished && userInput.price) ||
                    (user && !CarPublished && updateInput.price) || ''
                  }
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='number'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishPrice'
                  Inputid='publishPrice'
                  labelName='Año*'
                  onChange={handleChange}
                  inputName='year'
                  value={
                    (!user && userInput.year) ||
                    (user && CarPublished && userInput.year) ||
                    (user && !CarPublished && updateInput.year) || ''
                  }
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='number'
                />
              </div>
              <div className='description-container'>
                <h3 className='main-text-heading-form'>Tu vehiculo</h3>
                <textarea
                  className='textarea-publish'
                  rows='3'
                  onChange={handleChange}
                  value={
                    (!user && userInput.shortDescription) ||
                    (user && CarPublished && userInput.shortDescription) ||
                    (user && !CarPublished && updateInput.shortDescription) || ''
                  }
                  placeholder='Descripción corta (Max 50)*'
                  name='shortDescription'
                />
                 <textarea
                  className='textarea-publish'
                  rows='8'
                  onChange={handleChange}
                  value={
                    (!user && userInput.longDescription) ||
                    (user && CarPublished && userInput.longDescription) ||
                    (user && !CarPublished && updateInput.longDescription) || ''
                  }
                  placeholder='Descripción larga (Max 150)*'
                  name='longDescription'
                />
              </div>
            </div>
            {
              (user && !CarPublished) &&
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
                <Input
                  containerClassName='file-container'
                  lableClassName= 'custom-file-upload'
                  labelName= {
                    <>
                      {'Click aqui'}
                      <MdAddAPhoto className='upload-icon' />
                    </>
                  }
                  htmlFor='uploadImage'
                  Inputid='uploadImage'
                  InputClassName={false}
                  onChange={handleFiles}
                  inputName='files'
                  labelClassName='grey-color'
                  type='file'
                />
                <div className='files-uploaded'>
                  {
                    (CarPublished || !user) &&
                    userInput.files.map((file, key) => {
                      const photoNumber = key + 1;
                      return (
                        <div className='file' key={key}>
                            <b>Foto {photoNumber}:</b> {file.name}
                          <Button
                            name='X'
                            className='btn-publish remove-images'
                            type='button'
                            onClick={() => deleteImage(file.name, file.carId)}
                          />
                        </div>
                      )
                    })
                  }
                  {
                    (user && !CarPublished) &&
                    updateInput.files.map((car, key) => {

                      return (
                        <div className='file' key={key}>
                          <img
                            src={car.name ? URL.createObjectURL(car) : car}
                            alt="image"
                            style={{'width' : '250px'}}
                          />
                          <Button
                            name='X'
                            className='btn-publish remove-images'
                            type='button'
                            onClick={() => deleteImage(car, updateInput['idCar'], key)}
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='publish-button-container'>
              <Button
                name={ (user && !CarPublished) ? 'Editar Fotos' : 'Confirmar'}
                onClick={() => {
                  if((user && !CarPublished)) {
                    setStateButton(2);
                  } else if((!user && !CarPublished)) {
                    setStateButton(3);
                  } else if((user && CarPublished)) {
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
