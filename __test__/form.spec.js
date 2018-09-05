import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../src';

const value = {
  name: 'Blah', spouse: { name: 'CCC', age: 21 }, hobby: ['Drawing'],
};

function DomForm(v) {
  return (
    <form onSubmit={() => console.log('submit')}>
      <Form value={v} {...v} />
    </form>
  );
}

const inputBox = ({ name, value, validator}) => (
  <Form.Input>
    {form => (<input name={name} />) }
  </Form.Input>
);


const app = renderer.create(
  <DomForm value={value}>
    <inputBox name="name" />
  </DomForm>,
);

describe('Form component Test', () => {
  test('Form Component', () => {
    let tree = app.toJSON();
    console.log(tree.children);
  });
});
