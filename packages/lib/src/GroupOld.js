import React, { Fragment } from 'react';
import Input from './Input';
import Form from './Form';

const groupOnChange = (name, value, prevState) => ({
  ...prevState,
  [name]: value,
});

const Group = ({ name, ...other }) => (
  <Input name={name} {...other}>
    {form => (
      <Fragment>
        <Form
          value={form.get()}
          onChange={(n, value, prevState) => form.update(groupOnChange(n, value, prevState))}
          onSubmit={() => form.submit()}
          {...other}
        />
      </Fragment>
    )}
  </Input>
);

export default Group;
