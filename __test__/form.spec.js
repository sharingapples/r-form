import React, { Fragment } from 'react';
import { mount } from 'enzyme';
import Form from '../src';
import './setupTests';

const value = {
  name: 'Blah',
  spouse: { name: 'spousename', age: 11 },
  spouses: [{ name: 'A', age: 20 }, { name: 'B', age: 21 }, { name: 'C', age: 22 }],
  hobby: ['Drawing'],
  nameList: ['Nun', 'Another', 'One'],
  something: [['1', '2']],
};

const hobbies = ['Drawing', 'Sports', 'Art'];

const DomForm = ({ onSubmit, onChange, ...props }) => (
  <form onSubmit={() => onSubmit()} onChange={() => onChange()}>
    <Form {...props} />
  </form>
);


const InputBox = ({ name, value, validator}) => (
  <Form.Input name={name}>
    {(form) => {
      return (
        <input
          name={name}
          value={form.get()}
          onChange={(e) => {
            e.preventDefault();
            form.update(e.target.value);
          }}
        />
      );
    }}
  </Form.Input>
);

const FormArray = ({ name, InputType }) => (
  <Form.Array name={name} InputType={InputType} />
);

const FormGroup = ({ name }) => (
  <Form.Group name={name}>
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
    {/* <InputBox name="name" /> <br /> */}
    <FormArray name="nameList" InputType={InputBox} />
    {/* <FormGroup name="spouse" /> */}
    {/* <CheckBox name="hobby" domain={hobbies} /> */}
    {/* <FormArray name="spouses" InputType={FormGroup} /> */}

    {/* array within array */}
    <FormArray name="something" InputType={() => <FormArray name="name" InputType={InputBox} />} />
  </DomForm>
);

const changeFn = jest.fn();
const submitFn = jest.fn();
const component = mount(<App onSubmit={() => submitFn()} onChange={() => changeFn()} />);

describe('Form component Test', () => {
  test('Form Input on Change', () => {
    expect(component).toMatchSnapshot();

    // const input = component.find('input').first();
    // input.simulate('change', { target: { value: 'new Value' } });

    // const inp = component.find('input').first();

    // expect(inp.props().value).toBe('new Value');

    // expect(changeFn).toHaveBeenCalled();
  });

  // test('Form Group on Change', () => {
  //   const formGroup = component.find(FormGroup).first();
  //   const firstInputBox = formGroup.find('input').first();

  //   firstInputBox.simulate('change', { target: { value: 'new Value' } });

  //   const changeformGroup = component.find(Form).first();
  //   const changeInputBox = changeformGroup.find('input').first();
  //   expect(changeInputBox.props().value).toBe('new Value');
  // });

  // test('Form Array on Change', () => {
  //   const formArray = component.find(FormArray).first();
  //   const firstInputBox = formArray.find('input').first();

  //   firstInputBox.simulate('change', { target: { value: 'change nun' } });
  //   const changedFormArray = component.find(FormArray).first();
  //   const changedInputBox = changedFormArray.find('input').first();

  //   expect(changedInputBox.props().value).toBe('change nun');
  // });

  // test('Form Array and Form Group', () => {
  //   const formArray = component.find(FormArray).last();
  //   const formGroup = formArray.find(FormGroup).first();
  //   const inputBox = formGroup.find('input').first();

  //   inputBox.simulate('change', { target: { value: 'change name' } });

  //   const changedFormArray = component.find(FormArray).last();
  //   const changedFormGroup = changedFormArray.find(FormGroup).first();
  //   const changedInputBox = changedFormGroup.find('input').first();
  //   console.log(changedFormArray.props().value);
  //   expect(changedInputBox.props().value).toBe('change name');
  // });
});
