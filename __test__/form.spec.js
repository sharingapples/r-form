import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../src';

const value = {
  name: 'Blah', spouses: [{ name: 'CCC', age: 21 }, { name: 'CCC', age: 21 }, { name: 'CCC', age: 21 }], hobby: ['Drawing'],
};

const DomForm = ({ onSumbit, ...props }) => (
  <form onSubmit={() => onSumbit()}>
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

const app = renderer.create(
  <DomForm onSubmit={() => console.log('submit')} value={value}>
    <InputBox name="name" /> <br />
    <FormArray name="spouses" InputType={FormGroup} />
  </DomForm>,
);

describe('Form component Test', () => {
  test('Form Component', () => {
    const tree = app.toJSON();
    console.log(JSON.stringify(tree));
    expect(tree).toMatchSnapshot();
  });
});
