import React, { Component } from 'react';

export default class setState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter:0
    }
  }
  toAdd = () => {
    this.setState({ counter: this.state.counter + 1 })
    this.setState({ counter: this.state.counter + 2 })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h1>hello,setState</h1>
        <h3>{ counter}</h3>
        <button onClick={this.toAdd}>{counter}</button>
      </div>
    );
  }
}