import React, { Component } from 'react';
import Form from 'r-form';

class CheckBox extends Component {
  render() {
    const {
      name, className, value, onChange, options, ...other
    } = this.props;
    return options.map(op => (
      <div className={className} key={op}>
        <input
          name={name}
          className={className}
          type="checkbox"
          onChange={() => {
            const checkbox = value || [];
            const checkBoxValue = value && value.includes(op)
              ? value.filter(v => v !== op)
              : checkbox.concat(op);
            onChange(checkBoxValue);
          }}
          {...other}
        /> {op}
      </div>
    ));
  }
}

export default Form.createInput(owner => ({
  onChange: v => owner.update(v),
}))(CheckBox);
