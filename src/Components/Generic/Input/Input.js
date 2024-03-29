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
  onChange,
  onBlur,
  disabled
}) => {

  return (
    <div className={`input-container ${containerClassName}`}>
      <label
        htmlFor={htmlFor}
        className={`label ${labelClassName}`}>
        {labelName}
      </label>
      <input
        onBlur={onBlur}
        onChange={onChange}
        id={Inputid}
        className={`input ${InputClassName}`}
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
      />
    </div>
  )
}

export default Input;
