import { isValidText, isValidType } from '../../../Utils/FormValidations';
import EditForm from '../../../Components/EditForm/EditForm';

const EditPersonalForm = ({
  IconPersonal,
  handleChange,
  valuePersonalName,
  setEditForm,
  valuePersonalType,
 }) => {

  return (
    <>
      <EditForm
        EditHeadingName='Información Personal'
        EditIcon ={IconPersonal}
        onChange={handleChange}
        htmlForFirst='editName'
        labelNameFirst='Nombre'
        inputNameFirst='name'
        valueFirst={valuePersonalName}
        typeFirst='text'
        onBlurFirst={ (e) => {
          if(valuePersonalName) {
            !isValidText(e) &&
            setEditForm(prevState => ({ ...prevState, name: '' }));
          }
        }}
        personal='personal'
        htmlForSecond='editSeller'
        labelNameSecond='Particular o Concesionario'
        inputNameSecond='type'
        valueSecond={valuePersonalType}
        typeSecond='text'
        onBlurSecond={ (e) => {
          if(valuePersonalType) {
            !isValidType(e) &&
            setEditForm(prevState => ({ ...prevState, type: '' }));
          }
        }}
      />
    </>
  )
}

export default EditPersonalForm;
