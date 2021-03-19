import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useState , useContext } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { Context } from '../../Context';

const publish_URL = `url('/img/bg-publish.jpg')`;

const PublishPage = (props) => {
  const { data, setData } = useContext(Context);
  const [stateButton, setStateButton] = useState(0);

  const params = props.location.state?.params;
  const publish = props.location.state?.publish;

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
    const { name, value } = e.target;
    setUserInput({...userInput, [name]: value});
  }

  const handleFiles = (e) => {
    const fileObj = e.target.files[0];
    setUserInput(prevState => ({
      ...prevState,
      files: [...prevState.files, fileObj]
    }))
  }

  const deleteImage = (name, params) => {
    if (params) {
      // const newUpdatedFilesArray = updateInput.files.filter((file) => file !== name);
      // console.log({newUpdatedFilesArray});
      // setUpdateInput(prevState => ({
      //   ...prevState,
      //   files: [...newUpdatedFilesArray]
      // }))
    } else {
    const newFilesArray = userInput.files.filter((file) => file.name !== name);
      setUserInput(prevState => ({
        ...prevState,
        files: [...newFilesArray]
      }))
    }
  }

  const onSubmit = () => {
    switch (stateButton) {
      case 1:
        updatePublishedCar;
        break;
      case 2:
        updatePublishedImages;
        break;
      case 3:
        publishCarNotUser;
        break;
      case 4:
        publishCarUser;
        break;
      default:
        break;
    }
  }

  const publishCarNotUser = (e) => {
    e.preventDefault();

    // console.log('publishCarNotUser');
    // const formData = new FormData();
    // formData.append('username', userInput.username);
    // formData.append('email', userInput.email);
    // formData.append('phone', userInput.phone);
    // formData.append('address', userInput.address);
    // formData.append('city', userInput.city);
    // formData.append('type', userInput.type);
    // formData.append('brand', userInput.brand);
    // formData.append('model', userInput.model);
    // formData.append('km', userInput.km);
    // formData.append('price', userInput.price);
    // formData.append('year', userInput.year);
    // formData.append('shortDescription', userInput.shortDescription);
    // formData.append('longDescription', userInput.longDescription);
    // formData.append('file0', userInput.files[0]);
    // formData.append('file1', userInput.files[1]);
    // formData.append('file2', userInput.files[2]);
    // formData.append('file3', userInput.files[3]);
    // formData.append('file4', userInput.files[4]);

    // fetch('http://localhost:8000/publish', {
    //   method: 'POST',
    //   body: formData,
    //   mode: 'cors'
    // })
    // .then(response => response.json())
    // .then(
    //   resp => {
    //     // setData(prevState => ({ ...prevState, users: [...prevState.users, resp] }));
    //     console.log(resp);
    //   }
    // ).catch(error => console.log(error))
  }

  const updatePublishedCar = (e) => {
    e.preventDefault();
    console.log('updatePublishedCar');
    // const formData = new FormData();
    // formData.append('brand', updateInput.brand);
    // formData.append('model', updateInput.model);
    // formData.append('km', updateInput.km);
    // formData.append('price', updateInput.price);
    // formData.append('year', updateInput.year);
    // formData.append('shortDescription', updateInput.shortDescription);
    // formData.append('longDescription', updateInput.longDescription);
    // formData.append('file0', updateInput.files[0]);
    // formData.append('file1', updateInput.files[1]);
    // formData.append('file2', updateInput.files[2]);
    // formData.append('file3', updateInput.files[3]);
    // formData.append('file4', updateInput.files[4]);

    // const token = localStorage.getItem('UserToken');
    // const config = {
    //   method: 'POST',
    //   headers: { 'Authorization': `Bearer ${token}`},
    //   body: formData,
    // };
    // fetch(`http://localhost:8000/cars`, config)
    //   .then(response => {
    //     if (!response.ok)
    //       throw new Error(response.statusText);
    //     return response.json();
    //   })
    //   .then(
    //     res => {
    //       console.log(res);
    //       // const newPublishedArray = data.published.filter((car) => car.idCar !== res.id);
    //       // setData(prevState => ({ ...prevState, published: newPublishedArray}))
    //     })
    //   .catch( e => console.log(e));
  }

  const updatePublishedImages = (e) => {
    e.preventDefault();
    console.log('updatePublishedCar');
  }

  const publishCarUser = (e) => {
    e.preventDefault();

    console.log('publishCarUser');
    // const formData = new FormData();
    // formData.append('brand', userInput.brand);
    // formData.append('model', userInput.model);
    // formData.append('km', userInput.km);
    // formData.append('price', userInput.price);
    // formData.append('year', userInput.year);
    // formData.append('shortDescription', userInput.shortDescription);
    // formData.append('longDescription', userInput.longDescription);
    // formData.append('file0', userInput.files[0]);
    // formData.append('file1', userInput.files[1]);
    // formData.append('file2', userInput.files[2]);
    // formData.append('file3', userInput.files[3]);
    // formData.append('file4', userInput.files[4]);

    // fetch('http://localhost:8000/publish', {
    //   method: 'POST',
    //   body: formData,
    //   mode: 'cors'
    // })
    // .then(response => response.json())
    // .then(
    //   resp => {
    //     // setData(prevState => ({ ...prevState, users: [...prevState.users, resp] }));
    //     console.log(resp);
    //   }
    // ).catch(error => console.log(error))
  }

  return (
    <div id='publish'>
      <HeroSecondary
        src={publish_URL}
        text=' Publicaciones Únicas'
      />
      <div className='container'>
        <div className='register-container'>
          {
            (publish || !params)  &&
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
            (params && !publish) &&
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
              !params &&
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
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishBrand'
                  Inputid='publishBrand'
                  labelName='Marca*'
                  onChange={handleChange}
                  inputName='brand'
                  value={ !params ?
                    userInput.username :
                    updateInput.brand
                  }
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishModel'
                  Inputid='publishModel'
                  labelName='Modelo*'
                  onChange={handleChange}
                  inputName='model'
                  value={ !params ?
                    userInput.model :
                    updateInput.model
                  }
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishKm'
                  Inputid='publishKm'
                  labelName='Km'
                  onChange={handleChange}
                  inputName='km'
                  value={ !params ?
                    userInput.km :
                    updateInput.km
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
                  value={ !params ?
                    userInput.price :
                    updateInput.price
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
                  value={ !params ?
                    userInput.year :
                    updateInput.year
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
                  value={ !params ?
                    userInput.shortDescription :
                    updateInput.shortDescription
                  }
                  placeholder='Descripción corta (Max 50)*'
                  name='shortDescription'
                />
                 <textarea
                  className='textarea-publish'
                  rows='8'
                  onChange={handleChange}
                  value={ !params ?
                    userInput.longDescription :
                    updateInput.longDescription
                  }
                  placeholder='Descripción larga (Max 150)*'
                  name='longDescription'
                />
              </div>
            </div>
            {
              (params && !publish) &&
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
                    // (params && !publish) &&
                    // userInput.files.map((file, key) => {
                    //   const photoNumber = key + 1;
                    //   return (
                        // <div className='file' key={key}>
                        //   <b>Foto {photoNumber}:</b> {file.name}
                          // <Button
                          //   name='X'
                          //   className='btn-publish remove-images'
                          //   type='button'
                          //   onClick={() => (setStateButton(2))}
                          // />
                        // </div>
                    //   )
                    // })
                  }
                  {
                    // params &&
                    // updateInput.files.map((file, key) => {
                    //   const photoNumber = key + 1;
                    //   return (
                        // <div className='file' key={key}>
                        //   <b>Foto {photoNumber}:</b> {file}
                          // <Button
                          //   name='X'
                          //   className='btn-publish remove-images'
                          //   type='button'
                          //   onClick={() => (setStateButton(2))}
                          // />
                        // </div>
                    //   )
                    // })
                  }
                </div>
              </div>
            </div>
            <div className='publish-button-container'>
              <Button
                name={ (params && !publish) ? 'Editar Fotos' : 'Confirmar'}
                onClick={() => {
                  if((params && !publish)) {
                    setStateButton(2);
                  } else if((!params && !publish)) {
                    setStateButton(3);
                  } else if((params && publish)) {
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
