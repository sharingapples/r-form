import React from 'react';
import { Consumer } from './Group';
import InputHelper from './InputHelper';

const Input = ({
  name, ...other
}) => (
  <Consumer>
    {({
      register, get, update, state,
    }) => (
      <InputHelper
        state={state}
        ref={register(name)}
        get={get(name)}
        update={update(name)}
        {...other}
      />) }
  </Consumer>
);

export default Input;
