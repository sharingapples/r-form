import React from 'react';
import { Provider } from './Form';
import Input from './Input';

const Array = ({
  InputType, name, value, auto, ...other
}) => (
  <Input name={name} {...other}>
    {(form) => {
      let nodes = [];
      const state = value || form.get();
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

      console.log('Input', form.get(), name, state);
      return (
        <Provider value={{ form: tmp, state }}>
          <InputType name="name" />
          {/* <InputType InputType={props.InputType} /> */}
          {/* { // eslint-disable-next-line react/no-array-index-key
            state.map((v, idx) => <InputType key={idx} name={idx} value={v} />) }
          { auto ? <InputType key={form.get().length} name={form.get().length} /> : null} */}
        </Provider>
      );
    }
    }
  </Input>
);

export default Array;
