import ValidationError from './ValidationError';

export default function (value, state) {
  const v = String(value).trim();
  if (v.length === 0 || v === 'undefined') {
    try {
      throw new ValidationError(value, state, 'Required');
    } catch (e) {
      console.log('Required Validation error');
    }
  }

  return v;
}
