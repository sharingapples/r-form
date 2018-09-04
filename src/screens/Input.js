import React, { Component } from 'react';

type ValidatorFunction = (value: string, state: {}) => void;

type Props = {
  validator?: Array<ValidatorFunction> | ValidatorFunction,
  visibility: boolean,
  state: {},
  value: String,
  children: React,
};

class Input extends Component<Props> {
  state = {
    visible: false,
  };

  static getDerivedStateFromProps(props) {
    const { visibility, state } = props;
    if (visibility === undefined || visibility === true) {
      return {
        visible: true,
      };
    }
    // console.log(get());
    return {
      visible: typeof visibility === 'function' ? visibility(state) : (visibility === undefined || visibility),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const value = this.props.get();
    const { visible } = this.state;
    const check = nextProps.value !== value || nextState.visible !== visible;
    return check;
  }

  validate(value) {
    const { validator, state } = this.props;
    const validationValue = value;
    if (validator) {
      if (Array.isArray(validator)) {
        validator.forEach(v => v.default(validationValue, state));
      } else {
        validator.default(validationValue, state);
      }
    }
  }

  render() {
    const { children, visibility, ...form } = this.props;
    const { visible } = this.state;
    if (!visible) {
      return null;
    }
    return children(form);
  }
}


export default Input;
