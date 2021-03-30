import { Input } from '../../../../Components/Generic';

import {
  isValidEmail,
  isValidTlf,
  isValidNumber,
  isValidText } from '../../../../Utils/FormValidations';

const PublishCarDetails = ({
  user,
  CarNotPublished,
  handleChange,
  userInput,
  updateInput,
  setUserInput,
  setUpdateInput
  }) => {

  return (
    <>
     {
        (!user || (user && CarNotPublished)) &&
        <Input
          containerClassName='car-form-container'
          htmlFor='publishBrand'
          Inputid='publishBrand'
          labelName='Marca*'
          onChange={handleChange}
          inputName='brand'
          value={userInput.brand}
          labelClassName='grey-color'
          type='text'
          onBlur={ (e) => {
            if(userInput.brand) {
              !isValidText(e) &&
              setUserInput(prevState => ({...prevState, brand: ''}));
            }
          }}
        />
      }
      {
        (!user || (user && CarNotPublished)) &&
        <Input
          containerClassName='car-form-container'
          htmlFor='publishModel'
          Inputid='publishModel'
          labelName='Modelo*'
          onChange={handleChange}
          inputName='model'
          value={userInput.model}
          labelClassName='grey-color'
          type='text'
          onBlur={ (e) => {
            if(userInput.model) {
              !isValidText(e) &&
              setUserInput(prevState => ({...prevState, model: ''}));
            }
          }}
        />
      }
      <Input
        containerClassName='car-form-container'
        htmlFor='publishKm'
        Inputid='publishKm'
        labelName='Km'
        onChange={handleChange}
        inputName='km'
        value={
          (!user && userInput.km) ||
          (user && CarNotPublished && userInput.km) ||
          (user && !CarNotPublished && updateInput.km) || ''
        }
        labelClassName='grey-color'
        type='number'
        // onBlur={ (e) => {
        //   if(console.log(userInput.km)) {
        //     !isValidNumber(e) &&
        //     setUserInput(prevState => ({...prevState, km: ''}));
        //   } else if (updateInput.km) {
        //     setUpdateInput(prevState => ({...prevState, km: ''}));
        //   }
        // }}
      />
      <Input
        containerClassName='car-form-container'
        htmlFor='publishPrice'
        Inputid='publishPrice'
        labelName='Precio*'
        onChange={handleChange}
        inputName='price'
        value={
          (!user && userInput.price) ||
          (user && CarNotPublished && userInput.price) ||
          (user && !CarNotPublished && updateInput.price) || ''
        }
        labelClassName='grey-color'
        type='number'
      />
      <Input
        containerClassName='car-form-container'
        htmlFor='publishPrice'
        Inputid='publishPrice'
        labelName='Año*'
        onChange={handleChange}
        inputName='year'
        value={
          (!user && userInput.year) ||
          (user && CarNotPublished && userInput.year) ||
          (user && !CarNotPublished && updateInput.year) || ''
        }
        labelClassName='grey-color'
        type='number'
      />
    </>
  )
};

export default PublishCarDetails;
