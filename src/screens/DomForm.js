// @flow
import React from 'react';
import Form from './Form';

type Props = {
  onSubmit: Function,
  children: React,
}

const DomForm = ({ children, onSubmit }: Props) => (
  <Form onSubmit={onSubmit}>
    <Form.Consumer>
      {({ form }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.submit();
          }}
          onChange={e => e.preventDefault()}
        >
          {children}
        </form>
      ) }
    </Form.Consumer>
  </Form>);

export default DomForm;
