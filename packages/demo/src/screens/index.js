import React from 'react';
import Form from 'r-form';
import DomForm from './DomForm';
import DropDown from './FormComponents/DropDown';
import TextInput from './FormComponents/TextInput';

import AlmaMater from './AlmaMater';

const QUALIFICATIONS = ['school', 'hss', 'bachelors', 'masters', 'doctor'];
const QUALIFICATIONS_DISPLAY = ['School', 'Higher Secondary', 'Bachelors', 'Masters', 'Doctor'];

const FormApp = () => (
  <DomForm>
    <div> Data Collection </div>
    <div>
      <div> Basic Information </div>
      <Form.Group name="name">
        First Name : <TextInput name="firstName" /> <br />
        Middle Name : <TextInput name="middleName" /> <br />
        Last Name : <TextInput name="lastName" /> <br />
      </Form.Group>
    </div>
    <br />
    <div>
      Address <br />
      <Form.Group name="address">
          Address 1 : <TextInput name="address1" /> <br />
          Address 2: <TextInput name="address2" /> <br />
          City: <TextInput name="city" /> <br />
          State: <TextInput name="state" /> <br />
          Zip: <TextInput name="zip" /> <br />
      </Form.Group>
    </div>
    <br />
    Contact

    Email:
    <Form.Array name="email" auto>
      {({ idx, insert, remove }) => {
        return (
          <div key={idx}>
            <TextInput name={idx} />
            <button type="button" onClick={() => insert()}> + </button>
            <button type="button" onClick={() => remove()}> - </button>
          </div>
        );
      }
      }
    </Form.Array>
    Phone Number
    <Form.Array name="phoneNumber" auto>
      {({ idx, insert, remove }) => {
        return (
          <div key={idx}>
            <TextInput name={idx} />
            <button type="button" onClick={() => insert()}> + </button>
            <button type="button" onClick={() => remove()}> - </button>
          </div>
        );
      }
      }
    </Form.Array> <br />
    Education : <br />
    Select Education Level <br />
    <DropDown
      name="qualification"
      options={QUALIFICATIONS.reduce((res, qual, idx) => {
        res[qual] = QUALIFICATIONS_DISPLAY[idx];
        return res;
      }, {})}
    />
    <br />

    <Form.Select select={state => state.qualification}>
      {({ state }) => {
        const idx = QUALIFICATIONS.indexOf(state.qualification);
        // console.log(idx);
        const res = [];
        for (let i = 0; i <= idx; i += 1) {
          const q = QUALIFICATIONS[i];
          res.push(<AlmaMater key={q} name={q} />);
        }
        // console.log(res);
        return res;
      }
      }
    </Form.Select>

    <button> Submit </button>

  </DomForm>
);

export default FormApp;
