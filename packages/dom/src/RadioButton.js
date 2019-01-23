import React, { Component } from 'react';
import Form from 'r-form';


class RadioGroup extends Component {
  render() {
    const {
      onChange, value, options, className, name, ...other
    } = this.props;
    return options.map(op => (
      <div key={op} className={className}>
        <input
          name={name}
          type="radio"
          onChange={() => onChange(op)}
          checked={op === value}
          {...other}
        />
        <span>{op}</span>
      </div>
    ));
  }
}

const RadioButton = Form.createInput(owner => ({
  onChange: v => owner.update(v),
}))(RadioGroup);


export default RadioButton;
