// @flow
import React, { Component } from 'react';

type ValidatorFunction = (value: string, state: {}) => void;

type Props = {
  validator : Array<ValidatorFunction> | ValidatorFunction,
  visibility: boolean,
  state: {},
  value: String,
  children: React,
  get: Function,
};


class InputHelper extends Component {
  componentDidMount() {
    owner.register(this.props.name, this);
  }

  componentWillUnmount() {
    owner.register(this.props.name, null);
  }

  validate(value) {
    if (props.validators) {

    }
  }

  render() {
    return (
      <InputComponent
        ref={forwardedRef}
        update={owner.update(this.name)}
      />);
  }
}
export default InputHelper;
