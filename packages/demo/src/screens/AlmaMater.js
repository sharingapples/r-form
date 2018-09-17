import React from 'react';
import Form from 'r-form';
import TextInput from './FormComponents/TextInput';

const AlmaMater = ({ ...props }) => (
  <Form.Array defaultValue={[null]} {...props}>
    {({
      name, value, insert, remove,
    }) => {
      return (
        <Form.Group key={name} name={name}>
          <div className="almaMater">
            {String(props.name).toUpperCase().concat(' : ')}
            <TextInput name="institute" placeholder="Institute" />
            <TextInput name="university" placeholder="University" />
            <TextInput name="year" placeholder="Year" />
            <TextInput name="grade" placeholder="Grade" />
            <button className="button" type="button" onClick={() => insert()}> + </button>
            { value.length > 1 && <button className="button" type="button" onClick={() => remove()}> - </button> }
          </div>
        </Form.Group>
      );
    }
    }
  </Form.Array>
);

export default AlmaMater;
