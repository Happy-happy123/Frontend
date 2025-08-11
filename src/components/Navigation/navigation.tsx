import './navigation.css';
import { useState, useEffect } from 'react';
import { BannerItem } from '../../type';

const MainNavigation: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const banners: BannerItem[] = [
        { id: 1, title: '618大促', desc: '全场5折起' },
        { id: 2, title: '家电狂欢', desc: '满2000减300' },
        { id: 3, title: '数码产品', desc: '新品首发' },
        { id: 4, title: '食品生鲜', desc: '满199减100' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <div className='nav.container'>
            <div className='wrap1 box1'>
                <div className='item'>
                    <div className='nav-item'>家用电器</div>
                    <div className='nav-item'>手机/运营商/数码</div>
                    <div className='nav-item'>电脑/办公</div>
                    <div className='nav-item'>家居/家具/家装/厨具</div>
                    <div className='nav-item'>男装/女装/童装/内衣</div>
                    <div className='nav-item'>美妆/个护清洁/宠物</div>
                    <div className='nav-item'>女鞋/箱包/钟表/珠宝</div>
                    <div className='nav-item'>男鞋/运动/户外</div>
                    <div className='nav-item'>房产/汽车/汽车用品</div>
                    <div className='nav-item'>母婴/玩具乐器</div>
                    <div className='nav-item'>食品/酒类/生鲜/特产</div>
                    <div className='nav-item'>医药健康/营养保健</div>
                    <div className='nav-item'>图书/音像/娱乐/艺术</div>

                </div>
                <div className='banner'>
                    <div className="banner-carousel">
                        <div
                            className="banner-wrapper"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {banners.map((banner, index) => (
                                <div
                                    key={banner.id}
                                    className={`banner-item ${index === currentIndex ? 'active' : ''}`}
                                >
                                    <div className="banner-content">
                                        <h3>{banner.title}</h3>
                                        <p>{banner.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="carousel-indicators">
                            {banners.map((_, index) => (
                                <div
                                    key={index}
                                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='photo'>
                    <img src='https://img95.699pic.com/photo/60075/7005.jpg_wh860.jpg' className='img'></img>
                    <img src='https://tse1-mm.cn.bing.net/th/id/OIP-C.GF9lJkxNeAfxs3Vm7ThMvAHaE7?w=282&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' className='img'></img>
                    <img src='https://tse1-mm.cn.bing.net/th/id/OIP-C.hIzgfrPVPwM4Bluz2jZSPwHaFH?w=232&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' className='img'></img>
                </div>
                <div className='privacy'>
                    <img src='https://img11.360buyimg.com/img/jfs/t1/275721/2/1900/17609/67d15ec5Fbfdce671/4f23c5ca45c211c7.png' className='img1'></img>
                    <div className='text'>Hi~ 欢迎逛京东</div>
                    <div className='meb'>Plus会员</div>
                    <div className='meb1'>企业会员</div>
                    <div className='text1'>企业购 火车票 礼品卡</div>
                    <div className='text1'>云建站  话费  电影票</div>
                    <div className='text1'>五金城  游戏  加油卡</div>
                </div>
            </div>
        </div>
    )

}
export default MainNavigation;



