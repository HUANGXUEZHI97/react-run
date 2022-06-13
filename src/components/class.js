import React, { Component } from 'react';

export default class Cla extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date:new Date()
    }
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.setState({
        date:new Date()
      })
    }, 1000);
  }
  componentDidUpdate() {
    console.log(`updated! which is ${this.state.date.toLocaleTimeString()}`)
  }
  render() {
    return (
      <div>
        <h3>当地时间：{ this.state.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}