import React from 'react';
import Form from 'r-form';
import DomForm from './DomForm';
import DropDown from './FormComponents/DropDown';
import TextInput from './FormComponents/TextInput';
import RadioButton from './FormComponents/RadioButton';

import AlmaMater from './AlmaMater';
import { required } from './validators';


const genders = ['Male', 'Female', 'Other'];
const married = ['Married', 'Unmarried'];
const QUALIFICATIONS = ['school', 'hss', 'bachelors', 'masters', 'doctor'];
const QUALIFICATIONS_DISPLAY = ['School', 'Higher Secondary', 'Bachelors', 'Masters', 'Doctor'];

const FormApp = ({ onClick }) => (
  <DomForm onClick={onClick}>
    <div className="form-container">
      <div className="form-title">
        Data Collection
      </div>
      <div className="form-information">
        <Form.Group name="name">
          <div className="input-row">
            <div className="input-label">
              Name :
            </div>
            <div className="input-contents">
              <TextInput className="inputSizeThird" name="firstName" placeholder="First Name *" onChange={() => console.log('changed')} validator={[required]} />
              <TextInput className="inputSizeThird" name="middleName" placeholder="Middle Name" />
              <TextInput className="inputSizeThird" name="lastName" placeholder="Last Name *" />
            </div>
          </div>
        </Form.Group>
        <div className="input-row">
          <div className="input-label">
            Age :
          </div>
          <div className="input-contents">
            <TextInput className="inputSizeThird" name="age" placeholder="Age *" validator={[required]} />
          </div>
        </div>
        <div className="input-row">
          <div className="input-label">
            Gender :
          </div>
          <div className="input-contents">
            <RadioButton className="gender text-common" name="gender" options={genders} />
          </div>
        </div>
        <div className="input-row">
          <div className="input-label">
            Married :
          </div>
          <div className="input-contents">
            <RadioButton className="married text-common" name="married" options={married} />
          </div>
        </div>
        <Form.Select select={state => state.married === 'Married'}>
          {() => (
            <Form.Group name="spouse">
              <div className="input-row">
                <div className="input-label">
                  Spouse :
                </div>
                <div className="input-contents">
                  <TextInput name="name" placeholder="Name *" />
                  <TextInput name="age" placeholder="Age" />
                </div>
              </div>
            </Form.Group>)
          }
        </Form.Select>
        <div className="input-row">
          <div className="input-label"> Address: </div>
          <Form.Group name="address">
            <div className="input-contents">
              <TextInput className="inputSizeFull" name="address1" placeholder="Address *" />
            </div>
            <div className="input-label" />
            <div className="input-contents">
              <TextInput className="inputSizeFull" name="address2" placeholder="Address (Optional)" />
              <TextInput className="inputSizeThird" name="city" placeholder="City" />
              <TextInput className="inputSizeThird" name="state" placeholder="State" />
              <TextInput className="inputSizeThird" name="zip" placeholder="Zip" />
            </div>
          </Form.Group>
        </div>
        <div className="input-row">
          <div className="input-label">
            Email :
          </div>
          <div className="input-contents marginTopBottom ">
            <Form.Array name="email" auto>
              {({
                name, value, insert, remove,
              }) => (
                <div className="contact" key={name}>
                  <div className="contact-input-wrapper">
                    <TextInput className="contact-input" name={name} />
                    <div className="contact-button-wrapper">
                      <button className="button" type="button" onClick={() => insert()}> + </button>
                      {value && value.length > 0 && <button className="button" type="button" onClick={() => remove()}> - </button> }
                    </div>
                  </div>
                </div>
              )
              }
            </Form.Array>
          </div>
        </div>
        <div className="input-row">
          <div className="input-label">
            Phone No :
          </div>
          <div className="input-contents marginTopBottom ">
            <Form.Array name="phoneNumber" auto>
              {({
                name, insert, remove, value,
              }) => (
                <div className="contact" key={name}>
                  <div className="contact-input-wrapper">
                    <TextInput className="contact-input" name={name} />
                    <div className="contact-button-wrapper">
                      <button className="button" type="button" onClick={() => insert()}> + </button>
                      {value && value.length > 0 && <button className="button" type="button" onClick={() => remove()}> - </button> }
                    </div>
                  </div>
                </div>
              )
              }
            </Form.Array>
          </div>
        </div>
      </div>
      <div className="almaMater-container">
        <div className="almaMater-title"> Education </div>
        <div className="input-row">
          <div className="input-label">
            Level :
          </div>
          <div className="input-contents">
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
      <div className="input-row">
        <button className="submit-button" type="submit"> Submit </button>
      </div>
    </div>

  </DomForm>
);

export default FormApp;
