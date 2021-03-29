import { isValidText, isValidAddress, isValidTlf } from '../../../Utils/FormValidations';
import EditForm from '../../../Components/EditForm/EditForm';

const EditContactForm = ({
  IconContact,
  handleChange,
  valueContactAddress,
  setEditForm,
  valueContactPhone,
  valueContactCity
 }) => {

  return (
    <>
      <EditForm
        EditHeadingName='Contacto'
        EditIcon ={IconContact}
        onChange={handleChange}
        htmlForFirst='editAddress'
        labelNameFirst='Dirección'
        inputNameFirst='address'
        valueFirst={valueContactAddress}
        typeFirst='text'
        contact='contact'
        onBlurFirst={ (e) => {
          if(valueContactAddress) {
            !isValidAddress(e) &&
            setEditForm(prevState => ({ ...prevState, address: '' }));
          }
        }}
        htmlForSecond='editPhone'
        labelNameSecond='Teléfono'
        inputNameSecond='phone'
        valueSecond={valueContactPhone}
        typeSecond='tlf'
        onBlurSecond={ (e) => {
          if(valueContactPhone) {
            !isValidTlf(e) &&
            setEditForm(prevState => ({ ...prevState, phone: '' }));
          }
        }}
        htmlForThird='editCity'
        labelNameThird='Ciudad'
        inputNameThird='city'
        valueThird={valueContactCity}
        typeThird='text'
        onBlurThird={ (e) => {
          if(valueContactCity) {
            !isValidText(e) &&
            setEditForm(prevState => ({ ...prevState, city: '' }));
          }
        }}
      />
    </>
  )
};

export default EditContactForm;
