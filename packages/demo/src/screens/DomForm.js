import React from 'react';
import Form from 'r-form';

const DomForm = props => (
  <form onSubmit={() => console.log("on Submit")} onChange={() => console.log("change")}>
    <Form {...props} />
  </form>
);

export default DomForm;
