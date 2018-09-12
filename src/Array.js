import React, { Component } from 'react';
import { Provider } from './Form';
import Input from './Input';

const Array = ({
  InputType, name, value, ...other
}) => (
  <Input name={name} {...other}>
    {(form) => {
      let nodes = [];
      let state = value || form.get();
      const tmp = {
        get: id => () => state[id],
        update: id => (text) => {
          const newState = state.map((v, idx) => {
            if (id === idx) {
              return text;
            }
            return v;
          });
          form.update(newState);
        },
        next: id => () => {
          const idx = id + 1;
          if (idx < nodes.length) {
            nodes[idx].node.focus();
          }
        },
        register: id => (node) => {
          if (node === null) {
            nodes = nodes.filter(n => n.id === id);
          } else {
            nodes = nodes.concat({ id, node });
          }
        },

      };
      return (
        <ArrayHelper form={tmp} value={state} {...other} />
      );
    }
    }
  </Input>
);

class ArrayHelper extends Component {

  constructor() {
    super();
    this.state = {};
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.value) {
      return {
        value: props.value,
      };
    }
    return null;
  }

  insert() {
    const { value } = this.state;
    this.setState({
      value: value.concat(
        Object.keys(value[0]).reduce((obj, item) => {
          obj[item] = null;
          return obj;
        }, {}),
      ),
    });
  }

  remove(id) {
    const { value } = this.state;
    this.setState({
      value: value
        .slice(0, id)
        .concat(value.slice(id + 1)),
    });
  }

  render() {
    const { children, value, form, ...other } = this.props;
    const { insert, remove } = this;
    return (
      <Provider value={{ form, state: this.state }}>
        {this.state.value.length > 1 && this.state.value.map((n, idx) => children({ idx, value, insert, remove }))}
      </Provider>
    );
  }
}


export default Array;
