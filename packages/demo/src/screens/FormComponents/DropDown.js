import React from 'react';
import Form from 'r-form';

const DropDown = ({ name, value, options, className, defaultValue, validator}) => (
  <Form.Input name={name}>
    {(form) => {
      return (
        <select
          name={name}
          className={className}
          value={form.get()}
          onChange={(e) => {
            e.preventDefault();
            form.update(e.target.value);
          }}
        >
          <option> {defaultValue} </option>
          { Object.keys(options).map(op => <option key={op} value={op}> {options[op]} </option> )}
        </select>
      );
    }}
  </Form.Input>
);


export default DropDown;
