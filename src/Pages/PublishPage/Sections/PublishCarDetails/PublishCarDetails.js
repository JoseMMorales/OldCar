import { Input } from '../../../../Components/Generic';

const PublishCarDetails = ({
  user,
  CarPublished,
  handleChange,
  userInput,
  updateInput
  }) => {
  return (
    <>
     {
        (!user || (user && CarPublished)) &&
        <Input
          containerClassName='car-form-container'
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
          labelClassName='grey-color'
          type='text'
        />
      }
      {
        (!user || (user && CarPublished)) &&
        <Input
          containerClassName='car-form-container'
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
          (user && CarPublished && userInput.km) ||
          (user && !CarPublished && updateInput.km) || ''
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
          (user && CarPublished && userInput.price) ||
          (user && !CarPublished && updateInput.price) || ''
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
          (user && CarPublished && userInput.year) ||
          (user && !CarPublished && updateInput.year) || ''
        }
        labelClassName='grey-color'
        type='number'
      />
    </>
  )
};

export default PublishCarDetails;
