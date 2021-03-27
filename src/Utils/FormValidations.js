export const isValidEmail = (e) => {
  const emailValid = /^\S+@\S+\.\S+$/;

  if (!emailValid.test(e.target.value)) {
    alert('Email no válido!');
    return false;
  }
  return true;
};

export const isValidPassword = (e) => {
  const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (!passwordValid.test(e.target.value)) {
    alert('Password tiene que tener al menos 8 caracteres, al menos 1 letra y 1 carácter especial@#?');
    return false;
  }
  return true;
};

export const isValidText = (e) => {
  const textValid = /^([A-Za-z]){1,32}$/;

  if (!textValid.test(e.target.value)) {
    alert('El texto acepta al menos 32 caracteres alfabéticos');
    return false;
  }
  return true;
};
