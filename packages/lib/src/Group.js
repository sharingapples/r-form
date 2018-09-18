// @flow
import React, { Component } from 'react';
import Input from './Input';
import { ROOT } from './Form';

export const { Provider, Consumer } = React.createContext();

type Props = {
  onSubmit: () => boolean,
  onChange: (string) => any,
};

class Group extends Component <Props> {
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
    return () => this.props.value && this.props.value[name];
  }

  update(name) {
    return (text) => {
      const { value } = this.props;
      const { onChange } = this.props;

      const newValue = {
        ...value,
        [name]: text,
      };
      console.log(this.props);

      onChange(newValue);
      // this.setState((prevState) => {
      //   console.log('Update', name, prevState.data, text, v);
      //   if (typeof v === 'object') {
      //     return {
      //       data: {
      //         ...prevState.data,
      //         [name]: text,
      //         ...v,
      //       },
      //     };
      //   }
      //   return {
      //     data: {
      //       ...prevState.data,
      //       [name]: text,
      //     },
      //   };
      // });
      // this.nodes.filter(n => n.name === name).forEach(n => n.node.validate(text));
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
    const { props } = this;
    const state = {};
    this.nodes.forEach((iNode) => {
      const { node, name } = iNode;
      node.validate(node.props.get());
      if (node.props.get() !== undefined) {
        state[name] = node.props.get();
      }
    });
    props.onSubmit(state);
  }

  render() {
    const {
      onSubmit, onChange, value, name, ...other
    } = this.props;
    // console.log('Render state', this.state.data);
    this.register = this.register.bind(this);
    this.get = this.get.bind(this);
    this.next = this.next.bind(this);
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    console.log('Rendering form', value, this.props);
    if (name === ROOT) {
      return <Provider value={{ form: this, state: value }} {...other} />;
    }

    // return (
    //   <Input name={name} {...other}>
    //     <Provider value={{ form: this, state: value }}  {...other} />
    //   </Input>
    // );
  }
}

export default Group;
