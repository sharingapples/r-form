import React from 'react';
import Form from 'r-form';
import TextInput from './FormComponents/TextInput';

const AlmaMater = ({ ...props }) => (
  <Form.Array defaultValue={[null]} {...props}>
    {({ name, value, insert, remove }) => {
      return (
        <Form.Group key={name} name={name}>
          <div>
            Label : {props.name}
            <TextInput name="institute" />
            <TextInput name="university" />
            <TextInput name="year" />
            <TextInput name="grade" />
            <button type="button" onClick={() => insert()} > + </button>
            <button type="button" onClick={() => remove()} > - </button>
          </div>
        </Form.Group>
      )
    }
    }
  </Form.Array>
);

export default AlmaMater;
