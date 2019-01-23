import React, { Component } from 'react';
import Form from 'r-form';

// eslint-disable-next-line
class DropDown extends Component {
  render() {
    const {
      name, className, value, onChange, defaultValue, options, ...other
    } = this.props;
    return (
      <select
        name={name}
        className={className}
        value={value || defaultValue}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
        {...other}
      >
        <option> {defaultValue} </option>
        { Object.keys(options).map(op => <option key={op} value={op}> {options[op]} </option>)}
      </select>
    );
  }
}


export default Form.createInput(owner => ({
  onChange: v => owner.update(v),
}))(DropDown);
