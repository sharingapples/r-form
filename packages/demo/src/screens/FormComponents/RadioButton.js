import React, { Fragment } from 'react';
import Form from 'r-form';

const RadioButton = ({name , options, validator}) => (
  <Form.Input name={name}>
    {(form) => {
       return options.map(op => (
         <Fragment key={op}>
            <input
              name={name}
              type="radio"
              onChange={() => form.update(op)}
              checked={op === form.get()}
            /> {op}
          </Fragment>
          ))
      }
    }
  </Form.Input>
);

export default RadioButton;
