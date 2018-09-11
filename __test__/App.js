import React, { Component } from 'react';


const env = process.env.NODE_ENV;

class App extends Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    // this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      value: 'foo'
    };
  }

  // onChange() {
  onChange = () => {
    if (env==='development') {
      console.log('bar');
    }
    this.setState({
      value: 'bar'
    });
  };

  // onKeyPress() {
  onKeyPress = () => {
    if (env==='development') {
      console.log('pub');
    }
    this.setState({
      value: 'pub'
    });
  };

  render() {
    return (
      <div className="App">
        <input
          id="foo"
          value={this.state.value}
          onChange={(e) => {
            e.preventDefault();
            this.setState({
              value: e.target.value,
            });
          }}
          onKeyPress={this.onKeyPress}
        />
      </div>
    );
  }
}

export default App;
