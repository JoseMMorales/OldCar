import { isValidNumber, isValidText } from '../../../../Utils/FormValidations';
import { Input } from '../../../../Components/Generic';
import { Context } from '../../../../Context';
import { useContext } from 'react';

const PublishCarDetails = ({
  user,
  CarNotPublished,
  handleChange,
  userInput,
  updateInput,
  setUserInput,
  setUpdateInput
  }) => {
  const { numberWithDots } = useContext(Context);

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
        labelClassName='grey-color'
        type='number'
        value={
          (!user && numberWithDots(userInput.km)) ||
          (user && CarNotPublished && numberWithDots(userInput.km)) ||
          (user && !CarNotPublished && numberWithDots(updateInput.km)) || ''
        }
        onBlur={ (e) => {
          if(userInput.km) {
            !isValidNumber(e) &&
            setUserInput(prevState => ({...prevState, km: ''}));
          } else if (updateInput.km) {
            !isValidNumber(e) &&
            setUpdateInput(prevState => ({...prevState, km: ''}));
          }
        }}
      />
      <Input
        containerClassName='car-form-container'
        htmlFor='publishPrice'
        Inputid='publishPrice'
        labelName='Precio*'
        onChange={handleChange}
        inputName='price'
        labelClassName='grey-color'
        type='number'
        value={
          (!user && numberWithDots(userInput.price)) ||
          (user && CarNotPublished && numberWithDots(userInput.price)) ||
          (user && !CarNotPublished && numberWithDots(updateInput.price)) || ''
        }
        onBlur={ (e) => {
          if(userInput.price) {
            !isValidNumber(e) &&
            setUserInput(prevState => ({...prevState, price: ''}));
          } else if (updateInput.price) {
            !isValidNumber(e) &&
            setUpdateInput(prevState => ({...prevState, price: ''}));
          }
        }}
      />
      <Input
        containerClassName='car-form-container'
        htmlFor='publishPrice'
        Inputid='publishPrice'
        labelName='Año*'
        onChange={handleChange}
        inputName='year'
        labelClassName='grey-color'
        type='number'
        value={
          (!user && numberWithDots(userInput.year)) ||
          (user && CarNotPublished && numberWithDots(userInput.year)) ||
          (user && !CarNotPublished && numberWithDots(updateInput.year))|| ''
        }
        onBlur={ (e) => {
          if(userInput.year) {
            !isValidNumber(e) &&
            setUserInput(prevState => ({...prevState, year: ''}));
          } else if (updateInput.year) {
            !isValidNumber(e) &&
            setUpdateInput(prevState => ({...prevState, year: ''}));
          }
        }}
      />
    </>
  )
};

export default PublishCarDetails;
