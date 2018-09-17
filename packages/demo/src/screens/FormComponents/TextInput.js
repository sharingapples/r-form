import React from 'react';
import Form from 'r-form';

const TextInput = ({ name, value, placeholder, className, validator, visibility, ...other }) => (
  <Form.Input name={name} validator={validator} visibility={visibility}>
    {(form) => {
      return (
        <input
          name={name}
          className={className}
          value={form.get() || ''}
          placeholder={placeholder}
          onChange={(e) => {
            e.preventDefault();
            form.update(e.target.value);
          }}
          {...other}
        />
      );
    }}
  </Form.Input>
);

export default TextInput;
