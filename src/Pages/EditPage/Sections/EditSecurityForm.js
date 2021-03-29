import { isValidPassword } from '../../../Utils/FormValidations';
import EditForm from '../../../Components/EditForm/EditForm';

const EditSecurityForm = ({
  IconSecurity,
  handleChange,
  valueSecurityPassword,
  setEditForm
 }) => {
  return (
    <>
      <EditForm
        EditHeadingName='Seguridad'
        EditIcon ={IconSecurity}
        onChange={handleChange}
        htmlForFirst='editPassword'
        labelNameFirst='Contraseña'
        inputNameFirst='password'
        valueFirst={valueSecurityPassword}
        typeFirst='password'
        onBlurFirst={ (e) => {
          if(valueSecurityPassword) {
            !isValidPassword(e) &&
            setEditForm(prevState => ({...prevState, password: ''}));
          }
        }}
      />
    </>
  )
};

export default EditSecurityForm;
