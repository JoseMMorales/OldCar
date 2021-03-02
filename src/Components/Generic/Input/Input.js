const Input = ({
  Inputid,
  InputClassName,
  type,
  inputName,
  required,
  containerClassName,
  htmlFor,
  placeholder,
  value,
  labelName,
  labelClassName,
}) => {

  return (
    <div className={`input-container ${containerClassName}`}>
      <label
        htmlFor={htmlFor}
        className={`label ${labelClassName}`}>
        {labelName}
      </label>
      <input
        id={Inputid}
        className={`input ${InputClassName}`}
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        required={required}
      />
    </div>
  )
}

export default Input;
