import React from 'react';
import Form from 'r-form';

// create a reference to call the form events
const formRef = React.createRef();

const DomForm = props => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      // calls the internal form submit , which in return calls
      // the funtion onSubmit passed to Form as props as in below
      formRef.current.submit();
    }}
  >
    <Form
      ref={formRef}
      onSubmit={(state) => {
        props.onSubmit(state);
      }
      }
      {...props}
      // pass the props which contains children and other props
    />
  </form>
);

export default DomForm;
