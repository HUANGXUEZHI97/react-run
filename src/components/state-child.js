import React, { useEffect,memo} from 'react';

function StateChild(props) { 
  console.log('更新了')
  useEffect(() => { 
    console.log('更新了 in useEffect')
  },[])

  return (<p>hello!</p>)
}

export default memo(StateChild)