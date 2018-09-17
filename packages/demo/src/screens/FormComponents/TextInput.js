import React from 'react';
import Form from 'r-form';

const TextInput = ({ name, value, placeholder, className, validator}) => (
  <Form.Input name={name}>
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
        />
      );
    }}
  </Form.Input>
);

export default TextInput;
