import React from 'react';
import Form from 'r-form';

const formRef = React.createRef();

const DomForm = props => (
  <form onSubmit={(e) => {
    e.preventDefault();
    console.log("form", formRef.current.state);
  }} onChange={() => console.log("change")}>
    <Form ref={formRef} {...props} />
  </form>
);

export default DomForm;
