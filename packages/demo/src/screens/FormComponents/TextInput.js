import React from 'react';
import Form from 'r-form';

const TextInput = ({ name, value, validator}) => (
  <Form.Input name={name}>
    {(form) => {
      return (
        <input
          name={name}
          value={form.get() || ''}
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
