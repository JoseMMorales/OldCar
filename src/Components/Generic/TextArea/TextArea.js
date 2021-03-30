const TextArea = ({
  className,
  rows,
  placeholder,
  onChange,
  name,
  value,
  required
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
      />
    </>
  )
};

export default TextArea;
