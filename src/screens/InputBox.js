import React from 'react';
import Form from './Form';

const InputBox = ({
  type, name, validator, visibility, ...other
}) => (
  <Form.Input name={name} validator={validator} visibility={visibility}>
    {(form) => {
      return (
        <input
          name={name}
          type={type}
          value={form.value}
          onChange={e => form.update(e.target.value)}
          {...other}
        />);
    }
    }
  </Form.Input>
);

export default InputBox;
