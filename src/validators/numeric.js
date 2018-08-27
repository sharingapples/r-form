import ValidationError from './ValidationError';

export default function (value, state) {
  const v = value !== undefined ? isNaN(value) : false;
  if (v) {
    throw new ValidationError(value, 'Numeric');
  }

  return v;
}
