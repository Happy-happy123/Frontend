//引入组件
import Header from './components/Header/header';
import SearchBar from './components/Search/search';
import MainNavigation from './components/Navigation/navigation';
import SeckillSection from './components/Seckill/seckill';
import Footer from './components/Footer/footer';

const App = () => {
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

