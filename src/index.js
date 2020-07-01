import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// import ReactImg from './logo192.png';
// import './index.css';

// // base
// const name = 'tom'
// const jsx1 = <h2>Hello,{name}</h2>

// //function
// const fObj = {
//   firstName: 'jerry',
//   lastName: 'Tom'
// }
// function formatName(user) {
//   return user.firstName + '-' + user.lastName
// }
// const jsx2 = <h2>{formatName(fObj)}</h2>

// // object
// const jsx3 = <p>I`m object JSX</p>

// // 条件语句
// const show = false;
// const register = <b>去注册！！</b>
// const jsx4 = <div>
//   {show ? register : '登录'}
//   {!show && register}
// </div>

// // array & 注释
// const arr = [0,1,2]
// const jsx5  = <div>
//   {/* 循环数组 */}
//   <ul>
//     {/* diff的时候，首先比较元素类型，然后是比较key，所以同级同类型的元素，key值必须唯一 */}
//     {arr.map(item=>(<li key={item}>{item}</li>))}
//   </ul>
// </div>

// // img
// const jsx6 = <img src={ReactImg} alt="img"/>


// // modules
// const jsx7 = <div className="blackBox"></div> 



// const JSX = <div>
//   <h1>Hello React!</h1>
//   {jsx1}
//   {jsx2}
//   {jsx3}
//   {jsx4}
//   {jsx5}
//   {jsx6}
//   {jsx7}
// </div>

ReactDOM.render(<App />, document.querySelector('#root'))

