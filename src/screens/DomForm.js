// @flow
import React from 'react';
import Form from './Form';

type Props = {
  onSubmit: Function,
  children: React,
}

const rForm = React.createRef();

const DomForm = ({ onSubmit, ...other }: Props) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    rForm.current.submit(); // run all validators
    onSubmit(); // call the on submit function defined by users
  }}
  >
    <Form ref={rForm} {...other} />
  </form>
);

export default DomForm;
