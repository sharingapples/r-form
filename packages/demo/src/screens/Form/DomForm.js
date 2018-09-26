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
      // onUpdate={() => console.log('changes')}
    >
      <Form
        ref={formRef}
        onSubmit={(state) => {alert(JSON.stringify(state, null, 2)); console.log('State', state); } }
        {...props}
      />
    </form>
  </div>
);

export default DomForm;
