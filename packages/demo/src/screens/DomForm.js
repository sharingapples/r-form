import React from 'react';
import Form from 'r-form';

const formRef = React.createRef();

const DomForm = props => (
  <div className="main-container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formRef.current.submit();
      }}
      onChange={() => console.log('changes')}
    >
      <Form ref={formRef} onSubmit={state => console.log(state)} {...props} />
    </form>
  </div>
);

export default DomForm;
