import React, { Component } from 'react';
import Group from './Group';

export const ROOT = Math.floor((Math.random() * 100) + 1);

type Props = {
  onChange?: () => {},
}

class Form extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(data) {
    console.log('data', data);
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    const {
      onSubmit, onChange, value, ...other
    } = this.props;
    return (
      <Group name={ROOT} value={data} onChange={v => this.onUpdate(v)} {...other} />
    );
  }
}

export default Form;
