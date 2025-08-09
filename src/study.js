//函数组件
// function HeaderTop() {
//     return (
//         <div className='header-top'>
//             中国大陆版-陕西
//             <a href="#">你好,请登录</a>
//             <a href="#">注册</a>
//             <a href="#">切换至企业版</a>
//         </div>
//     )
// }
import './header.css';
//函数组件
// const HeaderTop = (props) => {
// 在函数组件的形参定义一个props，指向的是一个对象，包含了父组件传递过来的属性
// console.log(props);

//     const login = () => {
//         alert('注册')
//     }
//     return (
//         <div className='header'>
//             中国大陆版-陕西
//             <a href="#" onClick={() => {
//                 alert('你好,请登录')
//             }}>你好,请登录</a>
//             <a href="#" onClick={login}>注册</a>
//             <a href="#">{props.text}</a>
//         </div>
//     )
// }

// import React from "react";
//类组件
// class HeaderTop extends React.Component {
//     render() {
//         return (
//             <div className='header'>
//                 中国大陆版-陕西
//                 <a href="#">你好,请登录</a>
//                 <a href="#">注册</a>
//                 <a href="#">切换至企业版</a>
//             </div>
//         )
//     }
// }