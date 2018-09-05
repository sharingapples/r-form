import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../src';


const inputBox = renderer.create(
  <form>
    <Form>
      <input name="ss" />
    </Form>
  </form>,
);

describe('Form component Test', () => {
  test('Form Component', () => {
    let tree = inputBox.toJSON();
    console.log(tree, Form.Input);
  });
});
