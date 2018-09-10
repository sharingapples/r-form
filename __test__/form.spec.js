import renderer from 'react-test-renderer';
import React, { Fragment } from 'react';
import { mount, shallow, render } from 'enzyme';
import Form from '../src';
import './setupTests';

const value = {
  name: 'Blah', spouses: [{ name: 'CCC', age: 21 }, { name: 'CCC', age: 21 }, { name: 'CCC', age: 21 }], hobby: ['Drawing'],
};

const hobbies = ['Drawing', 'Sports', 'Art'];

const DomForm = ({ onSubmit, ...props }) => (
  <form onSubmit={() => onSubmit()}>
    <Form {...props} />
  </form>
);


const InputBox = ({ name, value, validator}) => (
  <Form.Input name={name}>
    {form => (<input name={name} />) }
  </Form.Input>
);

const FormArray = ({ name, InputType }) => (
  <Form.Array name={name} InputType={InputType} />
);

const FormGroup = () => (
  <Form.Group>
    <InputBox name="name" />
    <InputBox name="age" />
  </Form.Group>
);


const CheckBox = ({ name, domain, ...other }) => (
  <Form.Input name={name} {...other}>
    {form => (domain.map(d => (
      <Fragment key={d}>
        <input
          type="checkbox"
          value={d}
          checked={form.get().includes(d)}
          onChange={e => (
            e.target.checked ? form.update(form.value.concat(e.target.value)) : form.update(form.value.filter(v => v !== e.target.value))
          )}
        />
      </Fragment>
    ))

    )}
  </Form.Input>
);

const App = ({ onSubmit, onChange }) => (
  <DomForm onSubmit={() => onSubmit()} onChange={() => onChange()} value={value}>
    <InputBox name="name" /> <br />
    <FormArray name="spouses" InputType={FormGroup} />
    <CheckBox name="hobby" domain={hobbies} />
  </DomForm>
);

const submitFn = jest.fn();
const checkedFn = jest.fn();

describe('Form component Test', () => {
  test('Form onSubmit Called', () => {
    const changeFn = jest.fn();

    const component = mount(<App onSubmit={() => submitFn()} onChange={() => changeFn()} />);

    const input = component.first('input');
    input.simulate('change', 'somevalue');
    expect(checkedFn).toHaveBeenCalled();
  });

  // test('Checkbox test', () => {
  //   const component = mount(<App />);
  //   const checkbox = component.first('input[type="checkbox"]');
  //   console.log(checkbox.get());
  // });
});
