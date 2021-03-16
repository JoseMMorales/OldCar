import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { RiArrowDownSFill } from 'react-icons/ri';
import { useState , useContext} from 'react';
import { MdAddAPhoto } from 'react-icons/md';

const publish_URL = `url('/img/bg-publish.jpg')`;

const PublishPage = () => {

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

  const deleteImage = (name) => {
    const newFilesArray = userInput.files.filter((file) => file.name !== name);

    setUserInput(prevState => ({
      ...prevState,
      files: [...newFilesArray]
    }))
  }

  const addContact = e => {
    e.preventDefault();

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

    fetch('http://localhost:8000/publish', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
    .then(response => response.json())
    .then(
      resp => {

        // setData(prevState => ({ ...prevState, users: [...prevState.users, resp] }));
        console.log(resp);
      }
    ).catch(error => console.log(error))
  }

  return (
    <div id='publish'>
      <HeroSecondary
        src={publish_URL}
        text=' Publicaciones Únicas'
      />
      <div className='container'>
        <div className='register-container'>
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
          <form className='form-publish' onSubmit={addContact}>
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
                  value={userInput.brand}
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
                  value={userInput.model}
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
                  value={userInput.km}
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
                  value={userInput.price}
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
                  value={userInput.year}
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
                  value={userInput.shortDescription}
                  placeholder='Descripción corta (Max 50)*'
                  name='shortDescription'
                  required
                />
                 <textarea
                  className='textarea-publish'
                  rows='8'
                  onChange={handleChange}
                  value={userInput.longDescription}
                  placeholder='Descripción larga (Max 150)*'
                  name='longDescription'
                  required
                />
              </div>
            </div>
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
                    userInput.files.map((file, key) => {
                      const photoNumber = key + 1;
                      return (
                        <div className='file' key={key}>
                          <b>Foto {photoNumber}:</b> {file.name}
                          <Button
                            name='X'
                            className='btn-publish remove-images'
                            type='button'
                            onClick={() => deleteImage(file.name)}
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
                name='Confirmar'
                className='btn-publish'
                type='submit'
              />
              <label className='label-publish grey-color'>
                <input className='input' type='checkbox' name='remember' />
                  <span className='total-width'>
                    Acepto la politica de privacidad y las condiciones de servicio de Old
                    <span className='main-color'>Car</span>
                  </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PublishPage;
