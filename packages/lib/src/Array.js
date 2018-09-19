import React, { Component } from 'react';
import { Provider } from './Group';
import Input from './Input';


class Array extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    const {
      name, auto, children, defaultValue, ...other
    } = this.props;

    return (
      <Input name={name} {...other}>
        {(form) => {
          let nodes = [];
          const state = form.get() || defaultValue || (auto && [null]) || [];
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
          const insert = idx => () => {
            const newState = [
              ...state.slice(0, idx),
              null,
              ...state.slice(idx),
            ];
            // console.log('Array:',state, newState, idx);
            form.update(newState);
          };
          const remove = idx => () => {
            const newState = [
              ...state.slice(0, idx),
              ...state.slice(idx + 1),
            ];
            // console.log(idx, newState)
            form.update(newState);
          };
          return (
            <Provider value={{ form: tmp, state }}>
              {state && state.map((n, idx) => children({
                name: idx, value: state, insert: insert(idx), remove: remove(idx),
              }))}
            </Provider>
          );
        }
        }
      </Input>
    );
  }
}

export default Array;
