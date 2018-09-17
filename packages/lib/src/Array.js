import React from 'react';
import { Provider } from './Form';
import Input from './Input';

const Array = ({
  name, value, auto, children, defaultValue, ...other
}) => (
  <Input name={name} {...other}>
    {(form) => {
      let nodes = [];
      const state = form.get() || defaultValue || [];
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
      const insert = () => () => {
        const newState = [
          ...state,
          [null],
        ];
        form.update(newState);
      };
      const remove = idx => () => {
        const newState = [
          ...state.slice(0, idx),
          ...state.slice(idx + 1),
        ];
        form.update(newState);
      };

      const len = state.length + 1;
      return (
        <Provider value={{ form: tmp, state }}>
          {state && state.map((n, idx) => children({
            name: idx, value: state, insert: insert(), remove: remove(idx),
          }))}
          {auto && children({
            name: len, value: state, insert: insert(), remove: remove(len),
          })}
        </Provider>
      );
    }
    }
  </Input>
);

export default Array;
