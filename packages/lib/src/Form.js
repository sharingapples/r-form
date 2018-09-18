import React, { Component } from 'react';
import Group from './Group';

export const ROOT = Math.floor((Math.random() * 100) + 1);
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(data) {
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    const { onSubmit, onChange, value, ...other } = this.props;
    console.log(this.props);
    return (
      <Group name={ROOT} onChange={this.onChange} {...other} />
    );
  }
}

export default Form;
