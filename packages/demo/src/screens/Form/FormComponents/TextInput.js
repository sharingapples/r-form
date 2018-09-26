import Form from 'r-form';

const createProps = (owner, { value }) => ({
  onChange: e => owner.update(e.target.value),
  value: value || '',
});

const TextInput = Form.createInput(createProps)('input');


export default TextInput;
