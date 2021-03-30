import { Input } from '../../../../Components/Generic';

const PublishCarDetails = ({
  user,
  CarNotPublished,
  handleChange,
  userInput,
  updateInput
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
          value={
            (!user && userInput.brand) ||
            (user && CarNotPublished && userInput.brand) ||
            (user && !CarNotPublished && updateInput.brand) || ''
          }
          labelClassName='grey-color'
          type='text'
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
          value={
            (!user && userInput.model) ||
            (user && CarNotPublished && userInput.model) ||
            (user && !CarNotPublished && updateInput.model) || ''
          }
          labelClassName='grey-color'
          type='text'
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
