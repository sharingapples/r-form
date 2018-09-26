import React, { Component } from 'react';
import { Provider } from './Group';
import createInput from './Input';

type Props = {
  onChange: (string) => any,
};

class ArrayComponent extends Component<Props> {
  constructor() {
    super();
    this.nodes = [];
  }

  update(name, text) {
    const { onChange, value, auto } = this.props;
    let updatedValue = value ? value.map((v, idx) => {
      if (name === idx) {
        return text;
      }
      return v;
    })
      : [text];

    if (value && (name === value.length)) {
      updatedValue = updatedValue.concat(text);
    }

    if (auto && !updatedValue.some(v => v === '' || v === {} || v === null || v === undefined)) {
      onChange(updatedValue.concat([null]));
    } else {
      onChange(updatedValue);
    }
  }

  get(idx) {
    const { value } = this.props;
    return value && value[idx];
  }

  register(name, node) {
    if (node === null) {
      this.nodes = this.nodes.filter(n => n.name === name);
    } else {
      this.nodes = this.nodes.concat({ name, node });
    }
  }

  insert(idx) {
    return () => {
      const { value, onChange } = this.props;
      const updatedValue = value ? [
        ...value.slice(0, idx),
        null,
        ...value.slice(idx),
      ] : [null];
      onChange(updatedValue);
    };
  }

  remove(idx) {
    return () => {
      const { value, onChange } = this.props;
      const updatedValue = [
        ...value.slice(0, idx),
        ...value.slice(idx + 1),
      ];
      onChange(updatedValue);
    };
  }

  validate() {
    const {
      validator, state, value,
    } = this.props;

    this.nodes.forEach((iNode) => {
      const { node } = iNode;
      node.validate();
    });

    const validationValue = value;
    if (validator) {
      if (Array.isArray(validator)) {
        validator.forEach(v => v(validationValue, state));
      } else {
        validator(validationValue, state);
      }
    }
    return value;
  }

  render() {
    const {
      name, auto, children, value, ...other
    } = this.props;

    const adjusted = auto && value.length === 0 ? [null] : value;

    return (
      <Provider value={{ owner: this, state: value }} {...other}>
        {adjusted.map((n, idx) => children({
          name: idx, value, insert: this.insert(idx), remove: this.remove(idx),
        }))}
      </Provider>
    );
  }
}

const createProps = (owner, { value, defaultValue }) => ({
  onChange: v => owner.update(v),
  value: value || defaultValue || [],
});

export default createInput(createProps)(ArrayComponent);
