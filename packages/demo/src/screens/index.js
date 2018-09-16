import React from 'react';
import Form from 'r-form';
import DomForm from './DomForm';
import TextInput from './FormComponents/TextInput';

const FormApp = () => (
  <DomForm>
    <div> Data Collection </div>
    {/* <div> */}
      {/* <div> Basic Information </div>
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
    <br /> */}
    Contact

    Email:
    <Form.Array name="email">
      {({ idx, insert, remove }) => {
        return (
          <div key={idx}>
            <TextInput name={idx} />
            <button type="button" onClick={() => insert()()}> + </button>
            <button type="button" onClick={() => remove()}> - </button>
          </div>
        );
      }
      }
    </Form.Array>
    Phone Number
    <Form.Array name="phoneNumber">
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
  </DomForm>
);

export default FormApp;
