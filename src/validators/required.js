import ValidationError from './ValidationError';

export default function (value, state) {
  const v = String(value).trim();
  if (v.length === 0 || v === 'undefined') {
    throw new ValidationError(value, state, 'Required');
  }

  return v;
}
