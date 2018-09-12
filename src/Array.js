import React from 'react';
import { Provider } from './Form';
import Input from './Input';

const Array = ({
  InputType, name, value, auto, children, ...other
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
      const insert = () => {
        const newState = [
          ...state,
          Object.keys(state[0]).reduce((obj, item) => {
            obj[item] = '';
            return obj;
          }, {}),
        ];
        form.update(newState);
      };
      const remove = (idx) => {
        const newState = [
          ...state.slice(0, idx),
          ...state.slice(idx + 1),
        ];
        form.update(newState);
      };

      return (
        <Provider value={{ form: tmp, state }}>
          {state.map((n, idx) => children({
            idx, value, insert, remove,
          }))}
        </Provider>
      );
    }
    }
  </Input>
);

export default Array;
