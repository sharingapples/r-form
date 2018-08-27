import React from 'react';
import Form from './Form';

const Select = ({
  type, name, validator, children, ...other
}) => (
  <Form.Input name={name} validator={validator}>
    {form => (
      <select
        name={name}
        type={type}
        value={form.value}
        onChange={e => form.update(e.target.value)}
        {...other}
      >
        {children}
      </select>
    )}
  </Form.Input>
);


export default Select;
