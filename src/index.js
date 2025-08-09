//是js的入口文件
import ReactDOM from 'react-dom/client';
import './index.css'


//变量
// const app = (
//     <div className='header-top'>
//         中国大陆版-陕西
//         <a href="#">你好,请登录</a>
//         <a href="#">注册</a>
//         <a href="#">切换至企业版</a>
//     </div>
// )
//创建一个react根元素
// const root = ReactDOM.createRoot(document.getElementById('root'));
//将react元素渲染到页面
// root.render(app);




//函数组件,从外部导入
import App from './app';
//创建一个react根元素
const root = ReactDOM.createRoot(document.getElementById('root'));
//将react元素渲染到页面
root.render(<App />);
