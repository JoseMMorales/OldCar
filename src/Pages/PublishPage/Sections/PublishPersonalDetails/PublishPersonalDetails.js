import { Input } from '../../../../Components/Generic';
import {
  isValidEmail,
  isValidTlf,
  isValidType,
  isValidText } from '../../../../Utils/FormValidations';


function PublishPersonalDetails({
  handleChange,
  PublishValueName,
  PublishValueEmail,
  PublishValuePhone,
  PublishValueAddress,
  PublishValueCity,
  PublishValueSeller,
  setUserInput
  }) {

  return (
    <>
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishName'
        Inputid='publishName'
        labelName='Nombre*'
        onChange={handleChange}
        inputName='username'
        value={PublishValueName}
        labelClassName='grey-color'
        type='text'
        onBlur={ (e) => {
          if(PublishValueName) {
            !isValidText(e) &&
            setUserInput(prevState => ({...prevState, username: ''}));
          }
        }}
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishEmail'
        Inputid='publishEmail'
        labelName='Email*'
        onChange={handleChange}
        inputName='email'
        value={PublishValueEmail}
        labelClassName='grey-color'
        type='email'
        onBlur={ (e) => {
          if(PublishValueEmail) {
            !isValidEmail(e) &&
            setUserInput(prevState => ({...prevState, email: ''}));
          }
        }}
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishPhone'
        Inputid='publishPhone'
        labelName='Teléfono'
        onChange={handleChange}
        inputName='phone'
        value={PublishValuePhone}
        labelClassName='grey-color'
        type='tlf'
        onBlur={ (e) => {
          if(PublishValuePhone) {
            !isValidTlf(e) &&
            setUserInput(prevState => ({ ...prevState, phone: '' }));
          }
        }}
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishAddress'
        Inputid='publishAddress'
        labelName='Dirección'
        onChange={handleChange}
        inputName='address'
        value={PublishValueAddress}
        labelClassName='grey-color'
        type='text'
        onBlur={ (e) => {
          if(PublishValueAddress) {
            !isValidText(e) &&
            setUserInput(prevState => ({...prevState, address: ''}));
          }
        }}
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishCity'
        Inputid='publishCity'
        labelName='Ciudad'
        onChange={handleChange}
        inputName='city'
        value={PublishValueCity}
        labelClassName='grey-color'
        type='text'
        onBlur={ (e) => {
          if(PublishValueCity) {
            !isValidText(e) &&
            setUserInput(prevState => ({...prevState, city: ''}));
          }
        }}
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishSeller'
        Inputid='publishSeller'
        labelName='Particular o Concesionario'
        onChange={handleChange}
        inputName='type'
        value={PublishValueSeller}
        labelClassName='grey-color'
        type='text'
        onBlur={ (e) => {
          if(PublishValueSeller) {
            !isValidType(e) &&
            setUserInput(prevState => ({...prevState, type: ''}));
          }
        }}
      />
    </>
  )
};

export default PublishPersonalDetails;
