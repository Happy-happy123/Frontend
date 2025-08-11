//引入组件
import Header from './components/Header/header.tsx';

import SearchBar from './components/Search/search.tsx';
import MainNavigation from './components/Navigation/navigation.tsx';
import SeckillSection from './components/Seckill/seckill.tsx';
import Footer from './components/Footer/footer.tsx';

const App: React.FC = () => {//类型注解 React.FC 是一个类型别名，用于定义无状态的函数式组件。接受一个参数（通常是 props），并返回一个 React 元素（即 JSX）。

    return (
        <div>
            {/* 组件数据可以由外部设置，在组件间，父组件可以通过props向子组件传递数据 */}
            <Header />
            <SearchBar />
            <MainNavigation />
            <SeckillSection />
            <Footer />
        </div>
    )
}
export default App;

