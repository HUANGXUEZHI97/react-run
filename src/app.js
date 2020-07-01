import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      arr: ['不要直接修改 State', 'State 的更新可能是异步的', '在合成事件和周期函数中是异步的', 'State 的更新会被合并']
    }
  }
  changeValue = v => {
    // 修改变量的方式：setState
    this.setState({ counter: this.state.counter + v });
    console.log('counter:', this.state.counter)
  }
  setCounter = () => {
    this.changeValue(1)
    this.changeValue(2)
  }
  render() {
    // View层获得本class内变量的方式
    const { counter, arr } = this.state
    return (
      <div>
        <h3>SetStatePage</h3>
        <ul>
          {arr.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <h5>总结： setState只有在合成事件和⽣命周期函数中是异步的，在原⽣事件和setTimeout中都是同步
的，这⾥的异步其实是批量更新。</h5>
        <button onClick={this.setCounter}>{counter}</button>
      </div>
    )
  }
}