import './footer.css';
const Footer: React.FC = () => {
    return (
        <footer className="jd-footer">
            <div className="footer-nav">
                <a href="#" className="active">首页</a>
                <a href="#">分类</a>
                <a href="#">购物车</a>
                <a href="#">我的</a>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 JD.com 版权所有</p>
            </div>
        </footer>
    );
}
export default Footer;
