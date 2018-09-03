import React, { Fragment } from 'react';
import Form from './Form';

const RadioButton = ({ domain, name, ...other }) => (
  <Form.Input name={name} {...other}>
    {form => domain.map(value => (
      <Fragment key={value}>
        <input
          name={name}
          type="radio"
          onChange={() => form.update(value)}
        />
        {value}
      </Fragment>))}
  </Form.Input>
);

export default RadioButton;
