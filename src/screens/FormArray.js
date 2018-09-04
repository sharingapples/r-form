// @flow
import React, { Component } from 'react';
import Form, { Provider } from './Form';

type Props = {
  InputType: Object,
  name: String,
}


class FormArray extends Component<Props> {
  state = this.props.value || {};

  nodes= [];


  register(idx) {
    return (node) => {
      if (node === null) {
        this.nodes = this.nodes.filter(n => n.id === idx);
      } else {
        this.nodes = this.nodes.concat({ idx, node });
      }
    };
  }

  render() {
    const {
      InputType, name, auto, ...other
    } = this.props;
    return (
      <Form.Input name={name} {...other}>
        {(form) => {
          let nodes = [];
          const tmp = {
            get: id => () => form.get()[id],
            update: id => (value) => {
              const newState = form.get().map((v, idx) => {
                if (id === idx) {
                  return value;
                }
                return v;
              });
              form.update(newState);
            },
            next: () => console.log('next'),
            register: id => (node) => {
              if (node === null) {
                nodes = nodes.filter(n => n.id === id);
              } else {
                nodes = nodes.concat({ id, node });
              }
            },

          };
          return (
            <Provider value={{ form: tmp, state: form.value }}>
              { // eslint-disable-next-line react/no-array-index-key
                form.get().map((value, idx) => <InputType key={idx} name={idx} />) }
              { auto ? <InputType key={form.get().length} name={form.get().length} /> : null}
            </Provider>
          );
        }
        }
      </Form.Input>
    );
  }
}

export default FormArray;
