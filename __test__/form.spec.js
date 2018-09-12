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
  almaMater: { school: [{ name: 'First School' }, { name: 'Second School' }] },
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

const FormArray = ({ name }) => (
  <Form.Array name={name}>
    {({ idx }) => {
      return (
        <div key={idx}>
          <InputBox name={idx} />
        </div>
      );
    }
  }
  </Form.Array>
);

const FormGroup = ({ name }) => (
  <Form.Group name={name}>
    <InputBox name="name" />
    <InputBox name="age" />
  </Form.Group>
);


const SpousesGroup = ({ name }) => (
  <Form.Array name={name}>
    {({ idx, insert, remove }) => {
      return (
        <div key={idx}>
          <FormGroup name={idx} />
          <button type="button" onClick={() => insert()}> + </button>
          <button type="button" onClick={() => remove(idx)}> - </button>
        </div>
      );
    }
    }
  </Form.Array>
);

const List = ({ name }) => (
  <Form.Array name={name}>
    {({ idx }) => {
      return (
        <InputBox key={idx} name={idx} />
      );
    }}
  </Form.Array>
);

const ArrayList = ({ name }) => (
  <Form.Array name={name}>
    {({ idx }) => {
      return (
        <List key={idx} name={idx} />
      );
    }}
  </Form.Array>
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
            e.target.checked
              ? form.update(form.value.concat(e.target.value))
              : form.update(form.value.filter(v => v !== e.target.value))
          )}
        />
      </Fragment>
    ))

    )}
  </Form.Input>
);

const SchoolArray = ({ name }) => (
  <Form.Array name={name}>
    {({ idx }) => {
      return (
        <Form.Group key={idx} name={idx}>
          <InputBox name="name" />
        </Form.Group>
      );
    }}
  </Form.Array>
);

const GroupArray = ({ name }) => (
  <Form.Group name={name}>
    <SchoolArray name="school" />
  </Form.Group>
);

const App = ({ onSubmit, onChange }) => (
  <DomForm onSubmit={() => onSubmit()} onChange={() => onChange()} value={value}>
    {/* <InputBox name="name" /> <br /> */}
    <FormArray name="nameList" InputType={InputBox} />
    <FormGroup name="spouse" />
    <CheckBox name="hobby" domain={hobbies} />
    <SpousesGroup name="spouses" />

    {/* array within array */}
    <ArrayList name="something" />
    {/* Array within a Group */}

    <GroupArray name="almaMater" />
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

  test('Form Array on Change', () => {
    const formArray = component.find(FormArray).first();
    const firstInputBox = formArray.find('input').first();

    firstInputBox.simulate('change', { target: { value: 'change nun' } });
    const changedFormArray = component.find(FormArray).first();
    const changedInputBox = changedFormArray.find('input').first();

    expect(changedInputBox.props().value).toBe('change nun');
  });

  test('Array of Form Group onChange handler', () => {
    const formArray = component.find(SpousesGroup).first();
    const formGroup = formArray.find(FormGroup).first();
    const inputBox = formGroup.find('input').first();

    inputBox.simulate('change', { target: { value: 'change nun' } });


    const changedformArray = component.find(SpousesGroup).first();
    const changedformGroup = changedformArray.find(FormGroup).first();
    const changedInputBox = changedformGroup.find('input').first();
    expect(changedInputBox.props().value).toBe('change nun');
  });

  test('on Insert Call Test', () => {
    const formArray = component.find(SpousesGroup).first();
    const formGroup = formArray.find(FormGroup);
    const button = component.find('button').first();

    button.simulate('click');

    const changedFormArray = component.find(SpousesGroup).first();
    const changedFormGroup = changedFormArray.find(FormGroup);
    expect(changedFormGroup.children().length).toBe(formGroup.children().length + 1);
  });

  test('on Remove Call Test', () => {
    const formArray = component.find(SpousesGroup).first();
    const formGroup = formArray.find(FormGroup);
    const button = component.find('button').last();
    console.log(button.props());
    button.simulate('click');

    // const changedFormArray = component.find(SpousesGroup).first();
    // const changedFormGroup = changedFormArray.find(FormGroup);
    // expect(changedFormGroup.children().length).toBe(formGroup.children().length - 1);
  });
});
