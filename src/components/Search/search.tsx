import './search.css';
import { useState } from 'react';
import { HoverLinkProps } from '../../type';
const HoverLink: React.FC<HoverLinkProps> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="#"
            className="custom-link"
            style={{ color: isHovered ? '#e33333' : '#666' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </a>
    );
};
const SearchBar: React.FC = () => {
    return (
        <div className="search-container">
            <div className="wrap box">
                <div className="logo"></div>
                <div className='search'>
                    <div className='form'>
                        <input type='text' className='input' placeholder='请输入搜索内容' />
                        <button className='btn'>搜索</button>
                    </div>
                    <div className='nav'>
                        <HoverLink>京东生鲜</HoverLink>
                        <HoverLink>京东家电</HoverLink>
                        <HoverLink>京东手机</HoverLink>
                        <HoverLink>京东图书</HoverLink>
                        <HoverLink>京东运动</HoverLink>
                    </div>
                    <div className='shopping'>我的购物车</div>
                </div>
            </div>
        </div>

    );
}
export default SearchBar;
