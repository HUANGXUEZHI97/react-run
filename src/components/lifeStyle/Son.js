import React, { Component } from 'react'

export default class Son extends Component {

  constructor() {
    super()
    console.log('B...constructor...');
  }

  //组件挂载前触发
  componentWillMount() {
    console.log('B...componentWillMount....');
  }
  //组件挂载后触发
  componentDidMount() {
    console.log('B....componentDidMount...');
  }
  //组件接收到新的props时触发
  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps....');
  }
  //页面是否应该更新
  //true：更新，false：不更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate...');
    return true
  }
UNSAFE_componentWillReceiveProps
  //更新前触发
  componentWillUpdate() {
    console.log('componentWillUpdate....');
  }
  //更新后触发
  componentDidUpdate() {
    console.log('componentDidUpdate....');
  }
  //卸载前触发
  componentWillUnmount() {
    console.log('componentWillUnmount....');
  }

  render() {
    console.log('B...render');
    return (
      <div>
        组件B要换一辆：{this.props.carName}
      </div>
    )
  }
}