import { Input } from '../../Components/Generic';

const EditForm = ({
  EditHeadingName,
  EditIcon,
  onChange,
  htmlForFirst,
  labelNameFirst,
  inputNameFirst,
  valueFirst,
  typeFirst,
  onBlurFirst,
  htmlForSecond,
  labelNameSecond,
  inputNameSecond,
  valueSecond,
  typeSecond,
  onBlurSecond,
  htmlForThird,
  labelNameThird,
  inputNameThird,
  valueThird,
  typeThird,
  onBlurThird,
  personal,
  contact
 }) => {
  return (
    <div className="edit-info">
      <div className='heading-form bg-grey-Slight'>
        <h3 className='main-edit-heading-form main-color'>{EditHeadingName}</h3>
         {EditIcon}
      </div>
      <div className="input-edit">
        <Input
          containerClassName='edit-form-container'
          htmlFor={htmlForFirst}
          Inputid={htmlForFirst}
          labelName={labelNameFirst}
          onChange={onChange}
          inputName={inputNameFirst}
          value={valueFirst}
          labelClassName='grey-color'
          type={typeFirst}
          onBlur={onBlurFirst}
        />
        {
          (contact || personal) &&
          <Input
            containerClassName='edit-form-container'
            htmlFor={htmlForSecond}
            Inputid={htmlForSecond}
            labelName={labelNameSecond}
            onChange={onChange}
            inputName={inputNameSecond}
            value={valueSecond}
            labelClassName='grey-color'
            type={typeSecond}
            onBlur={onBlurSecond}
          />
        }
        {
          contact &&
          <Input
            containerClassName='edit-form-container'
            htmlFor={htmlForThird}
            Inputid={htmlForThird}
            labelName={labelNameThird}
            onChange={onChange}
            inputName={inputNameThird}
            labelClassName='grey-color'
            value={valueThird}
            type={typeThird}
            onBlur={onBlurThird}
          />
        }
      </div>
    </div>
  )
};

export default EditForm;
