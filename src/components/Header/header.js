import { useState } from 'react';
import './header.css';
// 可复用的HoverLink组件
const HoverLink = ({ children }) => {
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

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <span className="location">中国大陆版-陕西</span>
                <div className="divider"></div>
                <HoverLink>你好，请登录</HoverLink>
                <div className="divider"></div>
                <HoverLink>免费注册</HoverLink>
                <div className="divider"></div>
                <HoverLink>切换至企业版</HoverLink>
            </div>

            <div className="header-right">
                <HoverLink>购物车</HoverLink>
                <div className="divider"></div>
                <HoverLink>我的订单</HoverLink>
                <div className="divider"></div>
                <HoverLink>我的京东</HoverLink>
                <div className="divider"></div>
                <HoverLink>企业采购</HoverLink>
                <div className="divider"></div>
                <HoverLink>商家服务</HoverLink>
                <div className="divider"></div>
                <HoverLink>网站导航</HoverLink>
                <div className="divider"></div>
                <HoverLink>手机京东</HoverLink>
                <div className="divider"></div>
                <HoverLink>网站无障碍</HoverLink>
            </div>
        </div>
    );
}

export default Header;
