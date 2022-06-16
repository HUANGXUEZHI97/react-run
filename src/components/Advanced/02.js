import React from 'react';

export default class Index extends React.Component { 
  constructor(props) {
    super(props)
  }
  
  state = {}
  static number = 1
  handleClick = () => console.log(111)
  componentDidMount() { 
    console.log(Index,number,Index.number1)
  }
  render() { 
    return (<div style={{ marginTop: '50px' }} onClick={this.handerClick}  >hello,React!</div>)
  }
}
Index.number1 = 2
Index.prototype.handleClick = ()=> console.log(222)
