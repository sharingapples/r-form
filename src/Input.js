import React from 'react';
import { Consumer } from './Form';

const Input = ({
  name, validator, visibility, ...other
}) => (
  <Consumer>
    {({ form, state }) => (
      <Input
        validator={validator}
        state={state}
        ref={form.register(name)}
        get={form.get(name)}
        update={form.update(name)}
        next={form.next(name)}
        visibility={visibility}
        {...other}
      />
    )}
  </Consumer>
);

export default Input;
