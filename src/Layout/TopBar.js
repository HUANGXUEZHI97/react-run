import React, { Component } from 'react';
import './styles/index.css';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { title = '标题'} = this.props
    return (
      <div className={"top common"} >
        {title}
      </div>
    );
  }
}

export default TopBar;