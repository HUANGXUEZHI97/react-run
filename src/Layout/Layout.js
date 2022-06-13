import React, { Component } from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { children, showTop, showBottom } = this.props
    console.log('[ children ]', children)
    return (
      <>
        {showTop && <TopBar />}
        {children}
        {showBottom && <BottomBar />}
      </>
    );
  }
}

export default Layout;