import React, { Component } from 'react';
import FormApp from './Form';
import Output from './Output';

class DataApp extends Component {
  constructor() {
    super();
    this.state = {
      output: false,
      value: {},
    };
  }

  showOutput(value) {
    this.setState({
      output: true,
      value,
    });
  }

  render() {
    const { output, value } = this.state;
    return (
      output ? <Output value={value} /> : <FormApp onClick={v => this.showOutput(v)} />
    );
  }
}

export default DataApp;
