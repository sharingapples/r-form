import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../src';

const value = {
  name: 'Blah', spouse: { name: 'CCC', age: 21 }, hobby: ['Drawing'],
};

const DomForm = (props) => {
  return (
    <form onSubmit={() => console.log('submit')}>
      <Form {...props} />
    </form>
  );
}

const InputBox = ({ name, value, validator}) => (
  <Form.Input>
    {form => (<input name={name} />) }
  </Form.Input>
);


const app = renderer.create(
  <DomForm value={value}>
    <InputBox name="name" />
  </DomForm>,
);

describe('Form component Test', () => {
  test('Form Component', () => {
    const tree = app.toJSON();
    console.log(JSON.stringify(tree));
    expect(tree).toMatchSnapshot();
  });
});
