import React, { Component } from 'react';
import  './styles/index.css';

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { famous} = this.props
    return (
      <div className={'bottom common'}>
        {famous || 'made by Huang'}
      </div>
    );
  }
}

export default BottomBar;