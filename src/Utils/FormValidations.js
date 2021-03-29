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
  const textValid = /^([A-Za-z, ]){1,32}$/;

  if (!textValid.test(e.target.value)) {
    alert('El texto acepta al menos 32 caracteres alfabéticos');
    return false;
  }
  return true;
};

export const isValidType = (e) => {
  const textValid = /^(Particular|Concesionario)$/;

  if (!textValid.test(e.target.value)) {
    alert('Tipo de usuario debe ser Particular o Concesionario');
    return false;
  }
  return true;
};

export const isValidAddress = (e) => {
  const textValid = /^([A-Za-z0-9-_/.´, ]){1,42}$/;

  if (!textValid.test(e.target.value)) {
    alert('El texto acepta al menos 42 caracteres alfabéticos');
    return false;
  }
  return true;
};

export const isValidTlf = (e) => {
  const textValid = /^[+]?[0-9-]{9,16}$/;

  if (!textValid.test(e.target.value)) {
    alert('El teléfono tiene que tener entre 9 y 12 caracteres, con el prefijo del pais al que pertenece (+34654789213)');
    return false;
  }
  return true;
};
