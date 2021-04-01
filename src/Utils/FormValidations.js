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
  const textValid = /^([A-Za-z0-9-_/., ]){1,42}$/;

  if (!textValid.test(e.target.value)) {
    alert('El texto acepta al menos 42 caracteres alfabéticos');
    return false;
  }
  return true;
};

export const isValidTlf = (e) => {
  const textValid = /^[+]?[0-9-]{9,16}$/;

  if (!textValid.test(e.target.value)) {
    alert('El teléfono tiene que tener entre 9 y 12 caracteres, con el prefijo del pais al que pertenece Ej: +34654789213');
    return false;
  }
  return true;
};

export const isValidKm = (e) => {
  const kmValue = e.target.value;
  var valueNumber = kmValue.replace(/[^0-9]+/g, "");

  if (valueNumber >= 1 && valueNumber <= 179000) {
    return true;
  }
  alert('Solo se aceptan KMs desde 1 a 179.000');
  return false;
};

export const isValidAnno = (e) => {
  const annoValue = e.target.value;
  var valueNumber = annoValue.replace(/[^0-9]+/g, "");

  if (valueNumber >= 1919 && valueNumber <= 1985) {
    return true;
  }
  alert('Solo se aceptan Años desde 1.919 a 1.985');
  return false;
};

export const isValidPrice = (e) => {
  const priceValue = e.target.value;
  var valueNumber = priceValue.replace(/[^0-9]+/g, "");

  if (valueNumber >= 5500 && valueNumber <= 280000) {
    return true;
  }
  alert('Solo se aceptan Precios desde 5.500 a 200.000');
  return false;
};

export const isValidNumber = (e) => {
  const numberValue = e.target.value;
  const valueNumber = numberValue.replace(/[^0-9]+/g, "");

  if (valueNumber >= 1 && valueNumber <= 500000) {
   return true;
  }
  alert('Tiene que ser menos de 500.000');
  return false;
};

export const isValidShortDescription = (e) => {
  const textValue = e.target.value.length;

  if (textValue >= 50) {
    alert('Solo se aceptan 50 caracteres en la descripción');
    return false;
  }
  return true;
};

export const isValidLongDescription = (e) => {
  const textValue = e.target.value.length;

  if (textValue >= 150) {
    alert('Solo se aceptan 150 caracteres en la descripción');
    return false;
  }
  return true;
};


