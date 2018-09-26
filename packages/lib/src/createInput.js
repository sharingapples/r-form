import React, { Component } from 'react';
import { Consumer } from './Group';

function createInput(mapFormToProps) {
  return (InputComponent) => {
    class InputHelper extends Component {
      componentDidMount() {
        const { owner, name } = this.props;
        owner.register(name, this);
      }

      componentWillUnmount() {
        const { owner, name } = this.props;
        owner.register(name, null);
      }

      validate(value) {
        const {
          validator, state,
        } = this.props;
        if (this.reference && this.reference.validate) {
          this.reference.validate(value);
        }
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
        const { name, owner, ...other } = this.props;
        const params = {
          update: (value) => {
            this.validate(value);
            owner.update(name, value);
            if (other.onChange) {
              other.onChange(value);
            }
          },
        };
        const inputProps = { ...other, ...mapFormToProps(params, this.props) };
        return (
          <InputComponent
            ref={(node) => { this.reference = node; }}
            {...inputProps}
            name={name}
          />);
      }
    }

    return props => (
      <Consumer>
        {({ owner, state }) => (
          <InputHelper
            owner={owner}
            state={state}
            {...props}
            value={owner.get(props.name)}
          />)}
      </Consumer>
    );
  };
}

export default createInput;
