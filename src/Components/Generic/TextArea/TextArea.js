const TextArea = ({
  className,
  rows,
  placeholder,
  onChange,
  name,
  value,
  required,
  onBlur
 }) => {

  return (
    <>
      <textarea
        className={`textarea ${className}`}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        required={required}
        onBlur={onBlur}
      />
    </>
  )
};

export default TextArea;
