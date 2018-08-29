// @flow
import React, { Component } from 'react';
import DomForm from './screens/DomForm';
import Select from './screens/Select';
import CheckBox from './screens/CheckBox';
import InputBox from './screens/InputBox';
import SubmitButton from './screens/SubmitButton';
import { required, numeric } from './validators';
import Form from './screens/Form';

// type Validator = <T>(value: any, state: {}) => T;

const spouseVisiblity = state => state.maritial_status === 'M';

const Spouse = ({ name, ...other }) => (
  <Form.Group name={name} {...other}>
    <InputBox name="name" placeholder="name" /><br />
    <InputBox name="age" placeholder="age" /> <br />
  </Form.Group>
);

// const spouses = [{ name: 'A', age: 21 }, { name: 'B', age: 31 }, { name: 'C', age: 26 }];
const spouses = ['A', 'B', 'C'];
const hobby = [{ value: 'Music', checked: false }, { value: 'Drawing', checked: false }, { value: 'Sports', checked: false }];

class App extends Component {
  onSubmit() {
    console.log('submit');
  }

  render() {
    return (
      <DomForm
        onSubmit={this.onSubmit}
        value={
          {
            name: 'Blah', spouse: { name: 'CCC', age: 21 }, spouses, hobby,
          }}
      >
        <InputBox name="name" placeholder="Name" validator={required} /> <br />
        <InputBox name="username" placeholder="Username" /> <br />
        <InputBox type="number" name="phoneNumber" placeholder="Phone Number" validator={[numeric, required]} /> <br />
        <InputBox type="password" name="password" placeholder="password" /> <br />
        <Select type="select" name="maritial_status">
          <option value="U"> Unmarried </option>
          <option value="M"> Married </option>
        </Select>
        <br />
        <CheckBox name="hobby" />
        <SubmitButton type="submit" value="Save" />
      </DomForm>
    );
  }
}


export default App;
