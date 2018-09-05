import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../src';


const component = renderer.create(
  <form>
    <Form>
      <input name="ss" />
    </Form>
  </form>,
);

describe('Form component Test', () => {
  test('Form Component', () => {
    let tree = component.toJSON();
    console.log(tree);
  });
});
