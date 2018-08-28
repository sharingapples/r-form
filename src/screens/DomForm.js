// @flow
import React from 'react';
import Form from './Form';

type Props = {
  onSubmit: Function,
  children: React,
}

const DomForm = ({ onSubmit, ...other }: Props) => (
  <form onSubmit={onSubmit}>
    <Form {...other} />
  </form>
);

export default DomForm;
