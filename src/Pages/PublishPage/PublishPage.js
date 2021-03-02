import HeroSecondary from '../../Components/HeroSecondary/HeroSecondary';
import { Button, Input } from '../../Components/Generic';
import { RiArrowDownSFill } from 'react-icons/ri';
import { MdAddAPhoto } from 'react-icons/md';

const publish_URL = `url('/img/bg-publish.jpg')`;

const PublishPage = () => {
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
          <form className='form-publish'>
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
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishEmail'
                  Inputid='publishEmail'
                  labelName='Email*'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='email'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishPhone'
                  Inputid='publishPhone'
                  labelName='Teléfono'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='tlf'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishAddress'
                  Inputid='publishAddress'
                  labelName='Dirección'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishCity'
                  Inputid='publishCity'
                  labelName='Ciudad*'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishSeller'
                  Inputid='publishSeller'
                  labelName='Vendedor*'
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
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishModel'
                  Inputid='publishModel'
                  labelName='Modelo*'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishKm'
                  Inputid='publishKm'
                  labelName='Km'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
                <Input
                  containerClassName='publish-form-container'
                  htmlFor='publishPrice'
                  Inputid='publishPrice'
                  labelName='Precio*'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='text'
                />
              </div>
              <div className='description-container'>
                <h3 className='main-text-heading-form'>Tu vehiculo</h3>
                <textarea
                  className='textarea-publish'
                  rows='8'
                  placeholder='Descripción de tu coche...'
                  name='textArea'
                  required
                />
              </div>
            </div>
            <div className='car-pictures-publish'>
            <div className='heading-section-form bg-grey-Slight'>
                <h3 className='main-text-heading-form main-color'>Añade tus fotos</h3>
                <RiArrowDownSFill className='main-color'/>
              </div>
              <div className='inputs-section-form'>
                <Input
                  containerClassName='file-container'
                  lableClassName= 'custom-file-upload'
                  labelName= {
                    <>
                      {'Click aqui'}
                      <MdAddAPhoto className='upload-icon'/>
                    </>
                  }
                  htmlFor='uploadImage'
                  Inputid='uploadImage'
                  InputClassName={false}
                  labelClassName='grey-color'
                  type='file'
                />
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
