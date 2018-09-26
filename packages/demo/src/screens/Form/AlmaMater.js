import React from 'react';
import Form from 'r-form';
import TextInput from './FormComponents/TextInput';

const AlmaMater = ({ ...props }) => (
  <Form.Array name="almaMater" defaultValue={[null]} {...props}>
    {({
      name, value, insert, remove,
    }) => {
      return (
        <Form.Group key={name} name={name}>
          <div className="almaMater">
            <div className="input-row">
              <div className="input-label-almaMater">
                {name === 0 && String(props.name).toUpperCase().concat(' : ')}
              </div>
              <div className="input-contents">
                <TextInput name="institute" placeholder="Institute" />
                <TextInput name="university" placeholder="University" />
                <TextInput name="year" placeholder="Year" />
                <TextInput name="grade" placeholder="Grade" />
                <button className="button almabutton" type="button" onClick={() => insert()}> + </button>
                { value && value.length > 0 && <button className="button almabutton-minus" type="button" onClick={() => remove()}> - </button> }
              </div>
            </div>
          </div>
        </Form.Group>
      );
    }
    }
  </Form.Array>
);

export default AlmaMater;
