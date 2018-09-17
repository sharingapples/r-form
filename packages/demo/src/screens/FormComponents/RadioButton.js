import React from 'react';
import Form from 'r-form';

const RadioButton = ({name , options, className, validator}) => (
  <Form.Input name={name}>
    {(form) => {
      return options.map(op => (
        <div key={op} className={className}>
          <input
            name={name}
            type="radio"
            onChange={() => form.update(op)}
            checked={op === form.get()}
          /> <span> {op} </span>
        </div>
      ));
    }
    }
  </Form.Input>
);

export default RadioButton;
