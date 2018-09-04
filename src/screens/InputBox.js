import React from 'react';
import Form from './Form';

const InputBox = ({
  type, name, validator, visibility, onChange, state, id, ...other
}) => (
  <Form.Input name={name} validator={validator} visibility={visibility} {...other}>
    {(form) => {
      return (
        <input
          name={name}
          type={type}
          value={form.get()}
          onChange={(e) => {
            if (onChange !== undefined) {
              form.update(onChange(name, e.target.value, state, id));
            } else {
              form.update(e.target.value);
            }
          }}
          {...other}
        />);
    }
    }
  </Form.Input>
);

export default InputBox;
