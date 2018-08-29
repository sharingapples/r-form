import React, { Fragment } from 'react';
import Form from './Form';

const CheckBox = ({ domain, ...other }) => (
  <Form.Input {...other}>
    {form => domain.map(value => (
      <Fragment key={value}>
        <input
          type="checkbox"
          value={value}
          checked={form.value.includes(value)}
          onChange={e => (
            e.target.checked
              ? form.update(form.value.concat(e.target.value))
              : form.update(form.value.filter(v => v !== e.target.value))
          )}
        />
        {value} <br />
      </Fragment>
    ))}
  </Form.Input>
);

export default CheckBox;
