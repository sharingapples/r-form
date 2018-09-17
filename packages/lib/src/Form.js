// @flow
import React, { Component } from 'react';

export const { Provider, Consumer } = React.createContext();

type Props = {
  onSubmit: () => boolean,
  onChange: (string) => any,
};

class Form extends Component <Props> {
  state = this.props.value || {};

  nodes = [];

  register(name) {
    return (node) => {
      if (node === null) {
        this.nodes = this.nodes.filter(n => n.name === name);
      } else {
        this.nodes = this.nodes.concat({ name, node });
      }
    };
  }

  get(name) {
    return () => this.state[name];
  }

  update(name) {
    return (text) => {
      this.setState((prevState) => {
        const { onChange } = this.props;
        const v = onChange && onChange(name, text, prevState, this);
        if (typeof v === 'object') {
          return {
            [name]: text,
            ...v,
          };
        }
        return { [name]: text };
      });
      this.nodes.filter(n => n.name === name).forEach(n => n.node.validate(text));
    };
  }

  next(name) {
    return () => {
      const idx = this.nodes.findIndex(n => n.name === name) + 1;
      if (idx < this.nodes.length) {
        this.nodes[idx].node.focus();
      }
    };
  }

  submit() {
    const { state, props } = this;
    this.nodes.forEach((iNode) => {
      const { node } = iNode;
      node.validate(node.props.value);
    });
    // props.onSubmit(state);
  }

  render() {
    const {
      onSubmit, onChange, value, ...other
    } = this.props;
    this.register = this.register.bind(this);
    this.get = this.get.bind(this);
    this.next = this.next.bind(this);
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    return (
      <Provider value={{ form: this, state: this.state }} {...other} />
    );
  }
}

export default Form;
