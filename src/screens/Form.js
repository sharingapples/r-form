import React, { Component, Fragment } from 'react';
import Input from './Input';

const { Provider, Consumer } = React.createContext({});

class Form extends Component {
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
    return this.state[name];
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
      console.log('Next called', name);
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
    props.onSubmit(state);
  }

  render() {
    const {
      onSubmit, onChange, value, ...other
    } = this.props;
    return (
      <Provider value={{ form: this, state: this.state }} {...other} />
    );
  }
}

Form.Input = ({
  name, validator, visibility, ...other
}) => (
  <Consumer>
    {({ form, state }) => (
      <Input
        validator={validator}
        state={state}
        ref={form.register(name)}
        value={form.get(name)}
        update={form.update(name)}
        next={form.next(name)}
        visibility={visibility}
        {...other}
      />
    )}
  </Consumer>
);

const arrayOnChange = (name, value, prevState, idx) => {
  console.log('change');
};

Form.Array = ({ name, children, onChange, auto, ...other }) => (
  <Form.Input name={name} {...other}>
    {form => (
      <Fragment>
        {form.value.map((v, idx) => children(name))}
      </Fragment>
    )}
  </Form.Input>
);


const groupOnChange = (name, value, prevState) => ({
  ...prevState,
  [name]: value,
});

Form.Group = ({ name, ...other }) => (
  <Form.Input name={name} {...other}>
    {form => (
      <div>
        <Form
          value={form.value}
          onChange={(n, value, prevState) => form.update(groupOnChange(n, value, prevState))}
          onSubmit={() => form.submit()}
          {...other}
        />
      </div>
    )}
  </Form.Input>
);

Form.Consumer = Consumer;
export default Form;
