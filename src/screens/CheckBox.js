import React, { Fragment } from 'react';
import Form from './Form';

const checkboxOnChange = (name, idx, prevState) => {
  const newArray = {
    ...prevState,
    state: prevState.map((state, id) => {
      if (id !== idx) {
        return state;
      }
      return {
        ...state,
        checked: !state.checked,
      };
    }),
  };
  return newArray.state;
};


const CheckBox = ({
  name, validator, visibility, ...other
}) => (
  <Form.Input name={name} validator={validator} visibility={visibility}>
    {(form) => {
      return form.value.map(({ value, checked }, idx) => (
        <Fragment key={value}>
          <input
            name={name}
            type="checkbox"
            value={value}
            checked={checked}
            onChange={() => form.update(checkboxOnChange(name, idx, form.value))}
          />
          {value} <br />
        </Fragment>
      ));
    }
    }
  </Form.Input>
);

export default CheckBox;
