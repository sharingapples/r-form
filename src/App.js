// @flow
import React, { Component } from 'react';
import DomForm from './screens/DomForm';
import Select from './screens/Select';
import InputBox from './screens/InputBox';
import SubmitButton from './screens/SubmitButton';
import { required, numeric } from './validators';

type Validator = <T>(value: any, state: {}) => T;

const spouseVisiblity = state => state.maritial_status === 'M';

class App extends Component {
  onSubmit() {
    console.log('submit');
  }

  render() {
    return (
      <DomForm onSubmit={this.onSubmit}>
        <InputBox name="name" placeholder="Name" validator={required} /> <br />
        <InputBox name="username" placeholder="Username" /> <br />
        <InputBox type="number" name="phoneNumber" placeholder="Phone Number" validator={[numeric, required]} /> <br />
        <InputBox type="password" name="password" placeholder="password" /> <br />
        <Select type="select" name="maritial_status">
          <option value="U"> Unmarried </option>
          <option value="M"> Married </option>
        </Select>
        <br />
        <InputBox name="spouse_name" placeholder="spousename" visibility={spouseVisiblity} /><br />
        <SubmitButton type="submit" value="Save" />
      </DomForm>
    );
  }
}


export default App;
