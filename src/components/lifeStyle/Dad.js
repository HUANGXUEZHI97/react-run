import React, { Component } from 'react'
import Son from './Son'

export default class Dad extends Component {

  state = {
    carName: '五菱宏光'
  }

  constructor() {
    super()
    console.log('Dad...constructor...');
  }

  //组件挂在前触发
  componentWillMount() {
    console.log('Dad...componentWillMount....');
  }

  // 组件挂载后触发
  componentDidMount() {
    console.log('Dad...componentDidMount...');
  }

  //点击事件
  changeCar = () => {
    this.setState({ carName: 'GTR' })
    //得漂得漂得咿的漂
  }

  render() {
    console.log('Dad...render');
    const { carName} = this.state
    return (
      <div>
        <div>我是组件Dad</div>
        <button onClick={this.changeCar}>换车</button>
        <Son carName={carName} />
      </div>
    )
  }
}