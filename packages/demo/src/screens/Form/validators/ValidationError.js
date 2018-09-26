const ValidationError = (value, message) => {
  throw new Error(message);
};

export default ValidationError;
