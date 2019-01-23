import React from 'react';
import Form from 'r-form';
import { TextInput } from 'r-form-dom';

const AlmaMater = ({ ...props }) => (
  <Form.Array name="almaMater" defaultValue={[null]} {...props}>
    {({
      value, insert, remove,
    }) => (
      <Form.Group>
        <div className="almaMater">
          <div className="input-row">
            <div className="input-label-almaMater">
              { String(props.name).toUpperCase().concat(' : ')}
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
    )
    }
  </Form.Array>
);

export default AlmaMater;
