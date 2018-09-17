import React from 'react';
import Form from 'r-form';
import DomForm from './DomForm';
import DropDown from './FormComponents/DropDown';
import TextInput from './FormComponents/TextInput';
import RadioButton from './FormComponents/RadioButton';

import AlmaMater from './AlmaMater';
import { required } from '../validators';


const genders = ['Male', 'Female', 'Other'];
const married = ['Married', 'Unmarried'];
const QUALIFICATIONS = ['school', 'hss', 'bachelors', 'masters', 'doctor'];
const QUALIFICATIONS_DISPLAY = ['School', 'Higher Secondary', 'Bachelors', 'Masters', 'Doctor'];

const FormApp = () => (
  <DomForm>
    <div className="form-container">
      <div className="form-title">
        <center>Data Collection </center>
      </div>

      <div className="form-information">

        <div>
          <Form.Group name="name">
            <div className="inputContainer">
              <span> Name : </span>
              <TextInput name="firstName" placeholder="First Name *" validator={[required]} />
              <TextInput name="middleName" placeholder="Middle Name" />
              <TextInput name="lastName" placeholder="Last Name *" />
            </div>
          </Form.Group>
          <br />
          <div className="inputContainer">
            <span>Age: </span><TextInput name="age" placeholder="Age *" />
          </div>
          <div className="inputContainer">
            <span>Gender* : </span><RadioButton className="gender" name="gender" options={genders} />
          </div>
          <div className="inputContainer">
            <span> Married* : </span><RadioButton name="married" options={married} />
          </div>
          <Form.Select select={state => state.married === 'Married'}>
            {() => (
              <Form.Group name="spouse">
                <div className="inputContainer">
                  <span>Spouse : </span>
                  <TextInput name="name" placeholder="Name *" />
                  <TextInput name="age" placeholder="Age" />
                </div>
              </Form.Group>)
            }
          </Form.Select>
        </div>
        <br />
        <div>
          Address <br />
          <Form.Group name="address">
            <TextInput className="inputSizeFull" name="address1" placeholder="Address *" />
            <TextInput className="inputSizeFull" name="address2" placeholder="Address (Optional)" />
            <TextInput className="inputSizeThird" name="city" placeholder="City" />
            <TextInput className="inputSizeThird" name="state" placeholder="State" />
            <TextInput className="inputSizeThird" name="zip" placeholder="Zip" />
          </Form.Group>
        </div>
        <br />
        Contact
        <br />
        <div className="inputContainer">
          Email:
          <Form.Array name="email" auto>
            {({
              name, insert, value, remove,
            }) => (
              <div className="contact" key={name}>
                <TextInput name={name} />
                <button className="button" type="button" onClick={() => insert()}> + </button>
                {value.length > 0 && <button className="button" type="button" onClick={() => remove()}> - </button> }
              </div>
            )
            }
          </Form.Array>
        </div>
        <div className="inputContainer">
          Phone Number :
          <Form.Array name="phoneNumber" auto>
            {({
              name, insert, remove, value,
            }) => (
              <div className="contact" key={name}>
                <TextInput name={name} />
                <button className="button" type="button" onClick={() => insert()}> + </button>
                {value.length > 0 && <button className="button" type="button" onClick={() => remove()}> - </button> }
              </div>
            )
            }
          </Form.Array>
        </div>
        <div className="almaMater-container">
          Education<br /><br />
          <div>
            Select Education Level <br />
            <DropDown
              name="qualification"
              className="inputSizeAuto"
              defaultValue="None"
              options={QUALIFICATIONS.reduce((res, qual, idx) => {
                res[qual] = QUALIFICATIONS_DISPLAY[idx];
                return res;
              }, {})}
            />
          </div>
          <Form.Select select={state => state.qualification}>
            {({ state }) => {
              const idx = QUALIFICATIONS.indexOf(state.qualification);
              const res = [];
              for (let i = 0; i <= idx; i += 1) {
                const q = QUALIFICATIONS[i];
                res.push(<AlmaMater key={q} name={q} />);
              }
              return res;
            }
            }
          </Form.Select>
        </div>


        <button type="submit"> Submit </button>
      </div>
    </div>

  </DomForm>
);

export default FormApp;
