import React ,{ Component }from 'react';



export default class baseSyntax extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'base-syntax',
      obj: {
        firstName: 'Harry',
        lastName: 'Potter'
      },
      counter: true
    }
    // this.setState(counter, this.reverseCount)
  }
  // reverseCount() {
    
  // }
  getFullName() {
    
    return this.state.obj.firstName + '·' + this.state.obj.lastName
  }

  render() {
    const { counter, name } = this.state
    const obj = <div>good obj</div>
    const numarr = [0,1,2]
    return (
      <div>
        <h1>hello,{name}</h1>
        <span>{this.getFullName.bind(this)()}</span>
        <div>{counter ? obj : '无法显示'}</div>
        <ul>
          {numarr.map(i => <li key={i}>{i}</li>)}
        </ul>
      </div>
    );
  }
}