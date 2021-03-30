import { Input } from '../../../../Components/Generic';

function PublishPersonalDetails({
  handleChange,
  PublishValueName,
  PublishValueEmail,
  PublishValuePhone,
  PublishValueAddress,
  PublishValueCity,
  PublishValueSeller
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
        InputClassName={false}
        labelClassName='grey-color'
        type='text'
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishEmail'
        Inputid='publishEmail'
        labelName='Email*'
        onChange={handleChange}
        inputName='email'
        value={PublishValueEmail}
        InputClassName={false}
        labelClassName='grey-color'
        type='email'
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishPhone'
        Inputid='publishPhone'
        labelName='Teléfono'
        onChange={handleChange}
        inputName='phone'
        value={PublishValuePhone}
        InputClassName={false}
        labelClassName='grey-color'
        type='tlf'
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishAddress'
        Inputid='publishAddress'
        labelName='Dirección'
        onChange={handleChange}
        inputName='address'
        value={PublishValueAddress}
        InputClassName={false}
        labelClassName='grey-color'
        type='text'
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishCity'
        Inputid='publishCity'
        labelName='Ciudad'
        onChange={handleChange}
        inputName='city'
        value={PublishValueCity}
        InputClassName={false}
        labelClassName='grey-color'
        type='text'
      />
      <Input
        containerClassName='personal-form-container'
        htmlFor='publishSeller'
        Inputid='publishSeller'
        labelName='Particular o Concesionario'
        onChange={handleChange}
        inputName='type'
        value={PublishValueSeller}
        InputClassName={false}
        labelClassName='grey-color'
        type='text'
      />
    </>
  )
};

export default PublishPersonalDetails;
