import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../src';

function DomForm(value) {
  return <Form />
}

describe('Form component Test', () => {
  test('Form Component', () => {
    let tree = inputBox.toJSON();
    console.log(tree, InputBox);
  });
});
