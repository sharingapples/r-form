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

      validate() {
        const {
          validator, state, value,
        } = this.props;
        if (this.reference && this.reference.validate) {
          this.reference.validate();
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
            this.validate();
            owner.update(name, value);
            console.log(this.props);
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
