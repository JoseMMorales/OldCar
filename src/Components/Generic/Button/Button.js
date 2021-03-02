const Button = ({
  name,
  type,
  onClick,
  className
}) => {
  return  <button
            type={type}
            onClick={onClick}
            className= {`btn ${className}`}>
            {name}
          </button>
}

export default Button;
