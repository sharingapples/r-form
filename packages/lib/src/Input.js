import React from 'react';
import { Consumer } from './Form';
import InputHelper from './InputHelper';

const Input = ({
  name, ...other
}) => (
  <Consumer>
    {({ form, state }) => (
      <InputHelper
        state={state}
        ref={form.register(name)}
        get={form.get(name)}
        update={form.update(name)}
        next={form.next(name)}
        {...other}
      />) }
  </Consumer>
);

export default Input;
